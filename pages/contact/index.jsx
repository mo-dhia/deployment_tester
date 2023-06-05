import React, { useState, useRef, useEffect } from 'react';
import styles from "./contact.module.css";
import emo from "../../assets/emo1.png";
import Image from 'next/image';
import axios from 'axios';
import Header from '../landing/layout/header/header';
import CustomButton from '../contact/components/CustomButton';

const Contact = () => {
  const needs = ["Branding", "Web design", "site from scratch", "UI/UX", "Web animation", "Application design", "Html/css", "clothes conception", "Branding1", "Web design1", "site from scratch1", "UI/UX1",];
  const budget = ["15-30k", "30-40k", '40-70k', "70-100k", "+100k"];
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userNeeds, setUserNeeds] = useState([]);
  const [userBudget, setUserBudget] = useState("")
  const [url,setUrl]=useState("")


  const handleClick = (budget) => {
    setUserBudget(prevBudget => (prevBudget === budget ? "" : budget))
    console.log(userBudget);
  };
  const handleContact = async () => {
    if (firstName && lastName && email) {
      let user = { fin: firstName, ln: lastName, email: email, needs: userNeeds, budget: userBudget };
      console.log(user);
      try {
        let response = await axios.post('http://localhost:3000/api/clients/add/client', user);
        console.log(response);
        alert("Request sent successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setUserNeeds([]);
        setUserBudget("");
      } catch (e) {
        console.log({ message: e });
      }
    } else {
      alert("First name, last name, and email are required.");
    }
  };

  function handleInputChange(event) {
    const inputId = event.target.id;
    if (inputId === 'first') {
      const value = event.target.value;
      setFirstName(value);
      console.log('Input 1 value:', firstName);
    } else if (inputId === 'last') {
      const value = event.target.value;
      setLastName(value);
      console.log('Input 2 value:', lastName);
    } else if (inputId === 'email') {
      const value = event.target.value;
      setEmail(value)
      console.log('Input 3 value:', email);
    }
  }

  const addNeed = (need) => {
    if (!userNeeds.includes(need)) {
      setUserNeeds([...userNeeds, need]);
    } else {
      setUserNeeds(userNeeds.filter(e => e !== need));
    }
    console.log(userNeeds);
  };
  const fileInputRef = useRef(null);

  const handleUpload = async () => {
    const file = fileInputRef.current.files[0];
    const fileUrl = URL.createObjectURL(file);
    if (file) {
      try {
        console.log('Selected file:', file);
        console.log('url', fileUrl);
        setUrl(fileUrl)
        console.log("hiii",url);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.log('No file selected.');
    }
  };


  // const handleUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const fileUrl = reader.result;
  //       console.log('Selected file:', file);
  //       console.log('URL:', fileUrl);
  //       setUrl(fileUrl);
  //       console.log("hi",url);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     console.log('No file selected.');
  //   }
  // };
  return (
    <div className={styles.page}>
      <Header></Header>
      <div className={styles.contactContainer}>
        <h3>We are always happy to help!  <Image src={emo} alt="" style={{ width: "50px", height: "50px" }}></Image></h3>

        <div className={styles.getin}><h1>Get in touch!  </h1></div>
        <div > <h3>I need</h3> </div>
        <div className={styles.cerclescontainer}>
          {needs.map((need) => (
            <CustomButton
              key={need}
              label={need}
              isActive={userNeeds.includes(need)}
              onClick={() => addNeed(need)} />
          ))}

        </div>
        <div className={styles.contactForm}>
          <div> <input id="first" type="text" placeholder="Your first name" onChange={handleInputChange}></input> <div className={styles.line}></div></div>
          <div><input id="last" type="text" placeholder='Your last name' onChange={handleInputChange}></input><div className={styles.line}></div></div>
          <div><input id="email" type="email" placeholder='Your email' onChange={handleInputChange}></input><div className={styles.line} id="li"></div></div>
        </div>
        <div className={styles.attachement}>
          <div className={styles.cerclescontainer}>
            <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={handleUpload} />
            <CustomButton
              label="add attachement"
              isActive={false}
              onClick={() => fileInputRef.current.click()}
            />

          </div>
        </div>
        <div className={styles.title}><h3>Budget (USD)</h3></div>
        <div className={styles.budcont}>
          {budget.map((b) => (
            <div className={styles.cerclescontainer} key={b}>
              <CustomButton
                label={b}
                isActive={userBudget === b}
                onClick={() =>
                  handleClick(b)
                }
              />
            </div>
          ))}
        </div>
        <div className={styles.attachement}  >
          <div className={styles.cerclescontainer}>
            <CustomButton
              label="send request"
              isActive={false}
              onClick={handleContact}></CustomButton>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Contact