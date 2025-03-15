import React from 'react'

function Card({username}){
	// console.log("props :", props);
	return (
		<>
		<div className="rounded-xl bg-purple-100 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
          <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg font-semibold text-black">{username || 'No Name'}</p>
                  <p className="font-medium text-gray-500">Product Engineer</p>
                </div>
                <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                  Message
                </button>
            </div>
      	</div>
		</>
	)
}

export default Card
