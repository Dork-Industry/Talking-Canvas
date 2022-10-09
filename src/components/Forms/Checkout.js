import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { useLocation } from 'react-router-dom';
import "./checkout.css";
import { client } from "../../sanity"
function Checkout() {
  const { category, medium } = useSelector((state) => ({ ...state }));
  const location = useLocation();
  const { size, char, data,dataName } = location.state
  const [price, setPrice] = useState([])
  const [formdata, setFormData] = useState({ name: "", email: "", phone: "", address: "", city: "", country: "", zip: "", other: "" })
  const getData = async () => {
    const query = `*[_type=="price" && theme=='${category}' && medium=='${medium}' && size=='${size}' ]{
      price,
      _id
}`;
    const posts = await client.fetch(query);
    setPrice(posts)
  }
  const [coupon, setCoupon] = useState([])
  const getCoupon = async () => {
    const query = `*[_type=="coupon"]{
      _id,
      name,
      price,
      percentage,
    }`;
    const posts = await client.fetch(query);
    setCoupon(posts)
  }
  const [couponcode, setCouponCode] = useState();
  useEffect(() => {
    getData();
    getCoupon();
    window.scrollTo(0, 0)
  }, []);
  const handlecoupon = (e) => {
    e.preventDefault();
    const finding = coupon.find(item => (
      item.name === couponcode
    )
    )
    if (finding.percentage != 0){
      setOffer(Math.ceil(amt * (finding.percentage / 100)))
    } else {
        if (finding.price) {
          setOffer(finding.price)
        } else {
          setOffer(0)
        }
    }
  }
  const amt = price.map((item) => {
    return item.price
  })
  const [offer, setOffer] = useState(0)
  const gstAmt = amt * 0.18;
  const total = Math.ceil((amt * 1) + (gstAmt * 1) - (offer))
  const [terms,setTerms] = useState(false)
  const toggleTick = () => {
      if(terms) setTerms(false)
      else setTerms(true)
  }
  return (
    <div>
      <div className='checkout-heading container text-center fs-3 my-5 pt-5' >
        <h1>Payment <span className='text-muted '> &gt; Order Confirmation</span></h1>
      </div>
      <form>
        <div className='checkout-container container'>
          <div id="coupon">
            <div className='coupon px-4 py-3'>
              <p className='text-left mb-4'>If you have a coupon code, please apply it below</p>
              <div className='coupon-input '>
                <div className='flex flex-col md:flex-row'>
                  <div ><input class="py-2 px-3 text-gray-700 bg-gray-100 rounded" onChange={(e) => {
                    e.preventDefault()
                    setCouponCode(e.target.value)
                  }} id="cus_email" name="cus_email" type="text" required="" placeholder="Apply Coupon" aria-label="Email" /></div>
                  <div class=" mx-3 text-center">
                    <div>
                      {coupon.map((item) => {
                        return <div key={item._id}>
                          <p>{item.name}</p>
                        </div>
                      })}
                    </div>
                    <button onClick={handlecoupon} className=" px-4 py-2 text-white font-light tracking-wider bg-orange-500 rounded" type="submit">Apply Coupon</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="user-detail">
            <div class="leading-loose">
              <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                <p class="text-gray-800 font-medium">Customer information</p>
                <div class="">
                  <label class="block text-sm text-gray-00" for="cus_name">Name</label>
                  <input onChange={(e) => {
                    formdata.name = e.target.value
                  }} class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required={true} placeholder="Your Name" aria-label="Name" />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                  <input onChange={(e) => {
                    formdata.email = e.target.value
                  }} class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="Your Email" aria-label="Email" />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="cus_email">Number</label>
                  <input onChange={(e) => {
                    formdata.phone = e.target.value
                  }} class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="number" maxLength={10} minLength={10} required={true} placeholder="Your Email" aria-label="Email" />
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
                  <input onChange={(e) => {
                    formdata.address = e.target.value
                  }} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="Street" aria-label="Email" />
                </div>
                <div class="mt-2">
                  <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
                  <input onChange={(e) => {
                    formdata.city = e.target.value
                  }} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="City" aria-label="Email" />
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                  <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                  <input onChange={(e) => {
                    formdata.country = e.target.value
                  }} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="Country" aria-label="Email" />
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                  <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                  <input onChange={(e) => {
                    formdata.zip = e.target.value
                  }} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="Zip" aria-label="Email" />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="cus_email">Other Instructions</label>
                  <input onChange={(e) => {
                    formdata.other = e.target.value
                  }} class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Enter text ...." aria-label="Email" />
                </div>
              </form>
            </div>
          </div>
          <div id="product-detail" className='container mb-5'>
            <div className='product-detail text-left'>
              <h3 className='fs-3 mb-4'> Your Order</h3>
              <h5 className=' mb-3'>PRODUCT</h5>
              <hr />
              <p className=' mb-2'>Painting Medium : <span className='text-muted'>{medium}</span></p>
              <p className=' mb-2'>Painting Theme : <span className='text-muted'>{category}</span></p>
              <p className=' mb-2'>Size: <span className='text-muted'>{size}</span></p>
              <p className=' mb-2'>No of Characters: <span className='text-muted'>{char}</span></p>
              <p className=' mb-2'>File Uploaded: <span className='text-muted'>{dataName.name}</span></p>
              <hr />
              <div className=''>
                <table class="table-auto">
                  <thead>
                    <th className='' style={{ paddingRight: "200px" }}>Price
                    </th>
                    <th className=''>Amount</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=''>Subtotal</td>
                      <td className=''>₹  {amt}</td>
                    </tr>
                    <tr>
                      <td className=''>GST</td>
                      <td className=''>₹ {gstAmt}</td>
                    </tr>
                    <tr>
                      <td className=''>To Pay</td>
                      <td className=''>₹ {total}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='d-flex mt-5'><input onChange={toggleTick} className='mx-5' type="checkbox" id="tick" />
                  <label for="tick"> I have read and agree to the website terms and conditions * </label></div>
                <br></br>
                <div class="mt-4 text-center">
                  <button class="px-4 py-2 text-white font-light tracking-wider bg-orange-500  rounded" type="submit">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;