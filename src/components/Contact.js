import React from "react";


export default function Contact(){
    return (
        <>
            <a target="_blank" href='https://gonzaloiurman.com/contact.html '>
                <div className="flex fixed bottom-10 right-10 gap-2 items-center bg-black px-4 py-2 rounded-3xl ">
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M17 10.625H9.8s0 0 0 0-2.8 0-2.8 3C7 17 9.8 17 9.8 17h.8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.5 14l3.5-3.375L13.5 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <h2 className="text-2xl font-bold text-white">Contact Me</h2>
                </div>
            </a>
        </>
      
    )
}