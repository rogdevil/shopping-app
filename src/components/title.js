import React, { Component } from 'react';


export default function Title({name, title}) {
		return(
			<div className='row'>
				<div className='col-10 mx-auto my-2 text-center text-title'>
					<h1 className='text-capitalize mr-3 font-weight-bold'>
						{name} 
						<strong className='mr-2 text-blue'>
							{title}
						</strong>
					</h1>
				</div>
			</div>
		)
}