import { RightContainer, Heading, Text, FlexRow, Button } from "./style";
import { useEffect, useRef, useState } from "react";
import Modal from "../../Modal/Modal";

const Right = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const [salutation, setSalutation] = useState("Mr");
  const [state, setState] = useState("Tamil Nadu");
  const [isVisible, setIsVisible] = useState(false);
  const [isCarChecked, setIsCarChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (isSubmit) {
        console.log('isFirstNameValid : ', isFirstNameValid);
        console.log('isLastNameValid : ', isLastNameValid);
        console.log('isPhoneValid : ', isPhoneNumberValid);
      if (isFirstNameValid && isLastNameValid && isPhoneNumberValid) {
        if (isCarChecked) {
          if (isPrivacyChecked) {
            setIsVisible(true);
          } else {
            alert("Please accept the privacy conditions");
          }
        } else {
          alert("Please check the car checkbox");
        }
      }
      setIsSubmit(false);
    }
  }, [isSubmit]);

  const onSubmit = () => {
    console.log(salutation);
    console.log(firstNameRef.current.value);
    console.log(lastNameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneNumberRef.current.value);
    console.log(state);
    onFirstNameBlur();
    onLastNameBlur();
    onPhoneBlur();
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log("carchecked is ", isCarChecked);
  }, [isCarChecked]);

  const onSalutationSelect = (event) => {
    setSalutation(event.target.value);
  };

  const onStateSelect = (event) => {
    setState(event.target.value);
  };

  const onCloseModal = () => {
    setIsVisible(false);
  };

  const onCarCheckChange = () => {
    setIsCarChecked((prev) => !prev);
  };

  const onPrivacyCheck = () => {
    setIsPrivacyChecked((prev) => !prev);
  };

  const onFirstNameBlur = () => {
    let fname = firstNameRef.current.value + "";
    if (fname.length == 0) setIsFirstNameValid(false);
    else setIsFirstNameValid(true);
  };

  const onLastNameBlur = () => {
    let lname = lastNameRef.current.value + "";
    if (lname.length == 0) setIsLastNameValid(false);
    else setIsLastNameValid(true);
  };

  const onPhoneBlur = () => {
    let phone = phoneNumberRef.current.value + "";
    if (phone.length == 0 || phone.length != 10) setIsPhoneNumberValid(false);
    else setIsPhoneNumberValid(true);
  };

  return (
    <RightContainer>
      <FlexRow>
        <Heading>BOOK YOUR TEST DRIVE</Heading>
        <FlexRow colgap="0.3em">
          <Text className="ast">*</Text>
          <Text>Required Fields</Text>
        </FlexRow>
      </FlexRow>
      <FlexRow>
        <div>
          <FlexRow colgap="0.3em" justify="flex-start">
            <Text>Salutation</Text>
            <Text className="ast">*</Text>
          </FlexRow>
          <select className="select" onChange={onSalutationSelect}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
        </div>
        <div>
          <FlexRow colgap="0.3em" justify="flex-start">
            <Text>First Name</Text>
            <Text className="ast">*</Text>
          </FlexRow>
          <input
            type="text"
            className="input"
            ref={firstNameRef}
            onBlur={onFirstNameBlur}
          ></input>
          {!isFirstNameValid && (
            <p className="error">Field should not be empty</p>
          )}
        </div>
      </FlexRow>
      <FlexRow>
        <div>
          <FlexRow colgap="0.3em" justify="flex-start">
            <Text>Last Name</Text>
            <Text className="ast">*</Text>
          </FlexRow>
          <input
            type="text"
            className="input"
            ref={lastNameRef}
            onBlur={onLastNameBlur}
          ></input>
          {!isLastNameValid && <p className="error">Field should be empty</p>}
        </div>
        <div>
          <FlexRow colgap="0.3em" justify="flex-start">
            <Text>Mobile Number</Text>
            <Text className="ast">*</Text>
          </FlexRow>
          <input
            type="number"
            className="input"
            ref={phoneNumberRef}
            onBlur={onPhoneBlur}
          ></input>
          {!isPhoneNumberValid && (
            <p className="error">Enter a valid phone number</p>
          )}
        </div>
      </FlexRow>
      <FlexRow>
        <div>
          <FlexRow colgap="0.3em" justify="flex-start">
            <Text>Email</Text>
            <Text className="ast">*</Text>
          </FlexRow>
          <input type="email" className="email" ref={emailRef}></input>
        </div>
      </FlexRow>
      <FlexRow>
        <div>
          <FlexRow colgap="0.3em" justify="flex-start">
            <Text>State</Text>
            <Text className="ast">*</Text>
          </FlexRow>
          <select className="state" onChange={onStateSelect}>
            <option value="Mr">Tamil Nadu</option>
            <option value="Mrs">Kerala</option>
            <option value="Dr">Karnataka</option>
            <option value="Prof">Andhra Pradesh</option>
          </select>
        </div>
      </FlexRow>
      <div style={{ marginTop: "1em" }}>
        <input
          type="checkbox"
          id="1"
          name="car"
          value="car"
          onChange={onCarCheckChange}
        />
        <label htmlFor="vehicle1"> I would like to exchange my car</label>
        <br />
        <br />
        <input
          type="checkbox"
          id="2"
          name="privary"
          value="privacy"
          onChange={onPrivacyCheck}
        />
        <label htmlFor="vehicle2"> I agree with privacy policy</label>
        <br />
      </div>
      <Button onClick={onSubmit}>Submit</Button>
      {isVisible && (
        <Modal onClose={onCloseModal}>
          <p>
            Name : {salutation}. {firstNameRef.current.value}{" "}
            {lastNameRef.current.value}
          </p>
          <p>Email : {emailRef.current.value}</p>
          <p>Mobile Number : {phoneNumberRef.current.value}</p>
          <p>State : {state}</p>
        </Modal>
      )}
    </RightContainer>
  );
};

export default Right;
