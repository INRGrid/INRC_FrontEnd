import { Col, Form, Row } from "react-bootstrap"
import axios from 'axios';
import checkImg from "./../../../../media/greencheckicon.png"
import CommonModal from '../CommonModal'
import './JoinWaitlist.scss'
import InputCustom from "@/components/Inputs/InputCustom"
import CommonButton from "../../Button/CommonButton"
import FormCheck from "@/components/Inputs/FormCheck"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import Image from 'next/image';
import CommonHeading from "../../CommonHeading/CommonHeading";

export const JoinWaitlist = ({ show, handleClose }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const [subscribe, setSubscribe] = useState(false); // Track newsletter subscription

  // Validation schema
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError('');

      const payload = {
        firstName: values.firstname,
        lastName: values.lastname,
        email: values.email,
        phoneNo: values.phone,
        subscribe: subscribe,
      };

      try {
        const response = await axios.post('https://stage-api.inrgridstable.org/api/waitlist', payload);  
        setSubmitted(true);  
      } catch (error) {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <CommonModal
      show={show}
      handleClose={handleClose}
      backdropClassName="transaction_modal_bckdrop"
      backdrop="static"
      className="joinWaitlist"
      heading=" "
    >
      <div className="commonContentModal d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
        {submitted ? (
          // Centered Thank You message after submission
          <div className="text-center">
            <Image src={checkImg} alt="Success" width={80} height={80} style={{ marginBottom: '20px' }} />
            <CommonHeading
                heading="Thank you for joining the waitlist!"
                text="We will keep you updated."
            />
            <CommonButton 
              className="mt-4" 
              text="Thank you" 
              onClick={() => handleClose()}  
            />
          </div>
        ) : (
          // Form to join the waitlist
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="joinWaitlist_form">
                <h3 className="mb-5">Join Waitlist</h3>
                {error && <div className="error-message">{error}</div>}
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col xs={12} md={12} lg={6}>
                      <InputCustom
                        label="First name"
                        placeholder="First name"
                        id="firstname"
                        name="firstname"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        isInvalid={formik.touched.firstname && !!formik.errors.firstname}
                        error={
                          formik.errors.firstname && formik.touched.firstname ? (
                            <span className="error-message">{formik.errors.firstname}</span>
                          ) : null
                        }
                      />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                      <InputCustom
                        label="Last name"
                        placeholder="Last name"
                        id="lastname"
                        name="lastname"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        isInvalid={formik.touched.lastname && !!formik.errors.lastname}
                        error={
                          formik.errors.lastname && formik.touched.lastname ? (
                            <span className="error-message">{formik.errors.lastname}</span>
                          ) : null
                        }
                      />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <InputCustom
                        label="Email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                        error={
                          formik.errors.email && formik.touched.email ? (
                            <span className="error-message">{formik.errors.email}</span>
                          ) : null
                        }
                      />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <InputCustom
                        label="Phone No."
                        placeholder="Phone number"
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        isInvalid={formik.touched.phone && !!formik.errors.phone}
                        error={
                          formik.errors.phone && formik.touched.phone ? (
                            <span className="error-message">{formik.errors.phone}</span>
                          ) : null
                        }
                      />
                    </Col>
                  </Row>
                  <div className="d-flex mb-4 pb-2">
                    <FormCheck
                      type="checkbox"
                      label="Subscribe to INRC newsletter."
                      onChange={() => setSubscribe(!subscribe)} // Track subscription checkbox
                    />
                  </div>

                  <div className="w-100">
                    <CommonButton 
                      className="" 
                      disabled={loading} 
                      type="submit" 
                      text={loading ? "Joining..." : "Join Now"} 
                    />
                  </div>
                </Form>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className='popupVedio'>
                <video width="100%" autoPlay muted loop height="100%">
                  <source src="/images/Vidio.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </CommonModal>
  )
}
