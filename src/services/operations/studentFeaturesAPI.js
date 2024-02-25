
import { apiConnector } from "../apiConnector";
import { studentEndpoints } from "../apis";
import { toast } from "react-hot-toast";
import rzplogo from "../../assets/Images/rzp.png";
import { setPaymentLoading } from "../../slices/courseSlice";

import { resetCart } from "../../slices/cartSlice";




const {COURSE_PAYMENT_API,
    COURSE_VERIFY_API,
    SEND_PAYMENT_SUCCESS_EMAIL_API}=studentEndpoints

function loadScript(src) {
    return new Promise((resolve)=> {
        const script  =document.createElement('script');
        script.src=src;

        script.onload=() => {
            resolve(true);
        }
        script.onerror=() => {
            resolve(false);
        }
        document.body.appendChild(script)
    })
}




export async function buyCourse(token, courses, userDetails, navigate, dispatch) {

    const toastId =toast.loading("Loading...");
try{

    const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if(!res){
        toast.error('razropay sdk failed to load')
        return
    }

    const orderResponse =await apiConnector('POST',COURSE_PAYMENT_API,
    {courses},{
        Authorization:`Bearer ${token}`
    })
    console.log(orderResponse.data)

    if(!orderResponse.data.success){
        throw new Error(orderResponse.data.message)
    }

    const options ={
        key:process.env.RAZORPAY_KEY,
        currency:orderResponse.data.data.currency,
        amount:`${orderResponse.data.amount}`,
        order_id:orderResponse.data.data.id,
        name: 'StudyNotion',
        description:'Thank You For Purchasing the Course',
        image:rzplogo,
        prefill:{
            name:`${userDetails.firstName}`,
            email:userDetails.email
        },
        handler: function(response){
sendPaymentSuccessEmail(response,orderResponse.data.data.amount,token);

verifyPayment({...response,courses},token,navigate,dispatch)

        }
    }
    const paymentObject=new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on('Payment failed',function(response){
        toast.error('oops payment failed')
        console.log(response.error)
    })


} catch(error){

    console.log('Payment api error ..',error);
    toast.error('Could not make Payment')


}

toast.dismiss(toastId);


}

async function sendPaymentSuccessEmail(response,amount,token){

    try{

        await apiConnector('POST',SEND_PAYMENT_SUCCESS_EMAIL_API,{
            orderId:response.razorpay_order_id,
            paymentId:response.razorpay_payment_id,
            amount
        },{
            Authorization:`Bearer ${token}`
        })

        

    } catch(error){

        console.log(error)
    }
}



//verify payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
    const toastId = toast.loading("Verifying Payment....");
    dispatch(setPaymentLoading(true));
    try{
        const response  = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
            Authorization:`Bearer ${token}`,
        })

        if(!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("payment Successful, ypou are addded to the course");
        navigate("/dashboard/enrolled-courses");
        dispatch(resetCart());
    }   
    catch(error) {
        console.log("PAYMENT VERIFY ERROR....", error);
        toast.error("Could not verify Payment");
    }
    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false));
}

















