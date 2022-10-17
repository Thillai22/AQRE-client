import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShippingFast,faThumbsUp,faUmbrella,faLifeRing } from '@fortawesome/free-solid-svg-icons';


export default function endcard() {
  return (
    <>
    <div className="container-fluid mb-3">
	
    <div className="container">
    <div className="row mb-5">
		<div className="col-md-12">
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-md-3">
							<FontAwesomeIcon icon={faShippingFast}/>
							<p className="h6">Free shipping & Return <br/><small className="text-muted">For all orders over $500</small></p>
						</div>
						<div className="col-md-3">
                            <FontAwesomeIcon icon={faThumbsUp}/>
							<p className="h6">Customer Protection <br/><small className="text-muted">From click to delivery.</small></p>
						</div>
						<div className="col-md-3">
                            <FontAwesomeIcon icon={faUmbrella}/>
							<p className="h6">Safe Payment <br/><small className="text-muted">Use world’s most secure payment methods.</small></p>
						</div>
						<div className="col-md-3">
                            <FontAwesomeIcon icon={faLifeRing}/>
							<p className="h6">Support 24/7 <br/><small className="text-muted">We answer for question all time</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
    </div>
    </>
  )
}
