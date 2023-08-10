import React from 'react'
import Transition from '../transition'
import Navs from '../component/Nav'
import '../form.css'
import { useState,useEffect } from 'react'
import { db } from '../firebase-config/firebase'
import { collection,addDoc,doc,setDoc,getDocs } from 'firebase/firestore'
import PaystackPop from '@paystack/inline-js'
import { Link, useLocation } from "react-router-dom";


export default function Tickets() {
  const location = useLocation();
  const date = location.state;
  const days = date.day;
  const totas = date.tota
  const dat = date.da
  const codes = date.code
 

  //option
   const options = [
    {
      value: "Regular",
      dateName:"REGULAR ",
      dataPrice: 0,
    },
    {
      value: "vip",
      dateName:"VIP (+ $3000)",
      dataPrice: 3000,
    },
    {
      value: "vvip",
      dateName:"VVIP (+ $5000)",
      dataPrice: 5000,
    },
    // {
    //   value: "nothing",
    //   dateName:"SELECT TYPE OF TICKET",
    //   dataPrice: 0,
    // },
    
   
  ]

  const TicketRequestRef = collection(db, "ticketform");
  // const payRequestRef = collection(db, "sucessfulpay");


   // New ticket States
   const [user, setUser] = useState("");
   const [email, setEmail] = useState("");
   const [Tickettype, setTickettype] = useState("");
   const [Ticketprice, setTicketprice] = useState( );
   const [not, setNot] = useState("");
   const [paid, setPaid] = useState("no");
   const [reference, setreference] = useState("");
   
   //genrate unique id
   const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234579";
   let randomPassword = "";
   for (let i = 0; i < 5; i++) {
     const randomIndex = Math.floor(Math.random() * characters.length);
     randomPassword += characters[randomIndex];
   }
   let uniqueId = dat + randomPassword + codes
  
  useEffect(() => {
    if (Tickettype !== "") {
      // Update the state only when the value of the select element changes.
      setTicketprice(options.find((option) => option.value === Tickettype).dataPrice);

    }
  }, [Tickettype]);
  
 
   const totalpay = (Number(totas) + Number(Ticketprice)) * Number(not)
 

  
  const onSubmitticket = async (e) => {
    e.preventDefault();

    // try {
    //   await addDoc(TicketRequestRef, {
    //     Name : user,
    //     code: codes,
    //     day: days,
    //     email : email,
    //     id: uniqueId,
    //     nunberOfTicket : Number(not),
    //     ticketType : Tickettype,
    //     totalCost : totalpay,
        
    //   }); 
    //   console.log("Data saved successfully!");
    // } catch (err) {
    //   console.error(err);
    // }

    const paystack = new PaystackPop()
      paystack.newTransaction({
        key:"pk_test_1cc4d4a48b0391ad1ba1d054524bdda3759c2b3c",
        amount : totalpay * 100,
        email : email,
        Name : user,
        onSuccess (transaction){
          
          alert( `payment sucessful ! refrence ${transaction.reference}`);
          setPaid("yes")
          setreference (transaction.reference)
        },
        onCancle(){
          alert( `you have cancled the transaction`)


        }

      })
      try {
        await addDoc(TicketRequestRef, {
          Name : user,
          code: codes,
          day: days,
          email : email,
          id: uniqueId,
          nunberOfTicket : Number(not),
          ticketType : Tickettype,
          totalCost : totalpay,
          paid: paid,
          reference: reference,
          
        }); 
        console.log("Data saved successfully!");
      } catch (err) {
        console.error(err);
      }
  

        
   
    
  };


 console.log (Tickettype)
 console.log (Ticketprice)
 console.log (totalpay)

 

 

  return (
    <div className='bg-dark text-white pb-5 ticket-con' >
      <Navs/>
      <Transition>
          <div className='d-flex justify-content-center'>
            <div className="form-container" style={{overflow:"hidden"}}>
                <form className="form" onSubmit={onSubmitticket}>
                  <div>
                    <h6 className='hh'>{days}</h6>
                  </div>
                  <div className="form-group">
                    <label htmlFor="text">NAME</label>
                    <input
                              onChange={(e) => setUser(e.target.value)}

                     type="text" id="name" name="name" required className='input'/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input
                              onChange={(e) => setEmail(e.target.value)}

                     type="email" id="email" name="email" required className='input'/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="text">TYPE OF TICKET</label>
                    <select 
                              onChange={(e) => setTickettype(e.target.value)}

                    name="ticket-type" id="ticket-type" className='input' required>
                        <option className='bg-dark text-white'  value="0" data-value={0}> select type of ticket </option>
                        {options.map((option) => (
                        <option className='bg-dark text-white' key={option.value} value={option.value} data-value={option.dataPrice}>
                          {option.dateName}
                        </option>
                      ))}
                        
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="number-of-ticket">NUMBER OF TICKET (s)</label>
                    <input
                              onChange={(e) => setNot(e.target.value)}

                     type="number" id="not" name="not" required  className='input' />
                  </div>
                
                  <div className="d-flex justify-content-center ">
                  <button className=" fancy text-white" type="submit" >
                  <span className="top-key"></span>
                  <span className="text text-white">Buy Tickets NGN{totalpay}</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                   
                   </button>
                   
                  
                  </div>
                </form>
            </div>
        </div>
      </Transition>
    </div>
  )
}
