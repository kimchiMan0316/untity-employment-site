import { useEffect, useState } from "react"
import styled from "styled-components"

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 80px 0;
`
const Title = styled.h1`
    color: #353535;
    font-size: 32px;
    margin: 30px;
    font-weight: 500;
    &[name="subTitle"]{
        font-size: 18px;
        margin: 10px;
        color: gray;
    }
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
`
const Input = styled.input`
    opacity: 1;
    width: 480px;
    border: 1px solid #8b95a1;
    border-radius: 8px;
    font-size: 16px;
    padding: 10px;
    margin: 8px 0 4px 0;
    &[type="submit"]{
        font-size: 15px;
        background-color: #3182f6;
        color: white;
        width: 90px;
        border: none;
        cursor: pointer;
        &:hover{
            background-color: #2567c4;
        }
    }
`
const Alart = styled.h1`
    color:red;
    font-size: 12px;
`
const P = styled.h1`
    font-size: 15px;
    margin-top: 10px;
`
const Select = styled.select`
    width: 480px;
    border-radius: 8px;
    height: 42px;
    font-size: 17px;
    padding: 10px;
    margin: 10px 0;
`
const Option = styled.option``

const CheckBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: ${(props)=>(props.agree ? "3px solid #3182f6":"3px solid gray")};
    cursor: pointer;
    border-radius: 6px;
    background-color: ${(props)=>(props.agree ? "#3182f6":"")};
        &::after{
            content: "✓";
            color: white;
            font-size: 20px;

        }
    &:hover{
        border: 3px solid #3182f6;
    }
`
const CheckBoxArea = styled.div`
    height: 24px;
    margin: 8px;
    display: flex;
    align-items: center;
`
export default function EmploymentForm(){
    const [ name , setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [alart, setAlart] = useState("");
    const [text, setText] = useState("");
    const [ agree , setAgree ] = useState(false);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handlePhoneNumber = (e) =>{
        setPhoneNumber(e.target.value);
        
    }
    const handleSelect = (e) =>{
        console.log(e.target)
    } 
    
    const handleText = (e) =>{
        setText(e.target.value)
    }
    const checkbox = () =>{
        setAgree((prev)=>!prev)
    }
    return(
        <Wrap>
            <Title>지원서 작성하기</Title>
            <Title name="subTitle">untity2 프로젝트 입갤</Title>
            <Title name="subTitle">질문 사항은 기타 란에 작성해주세요.</Title>
            <Form>
                <P>이름</P>
                <Input type="text" value={name} name="name" onChange={handleName} required/>
                <P>전화번호</P>
                <Input type="text" value={phoneNumber} name="phoneNumber" onChange={handlePhoneNumber} placeholder="010-1234-5678" required/>
                <Alart>{alart}</Alart>
                <P>희망 분야</P>
                <Select onChange={handleSelect} onSelect={handleSelect}>
                        <Option style={{color:"gray"}} disabled>원하시는 직무를 선택해주세요.</Option>
                        <Option value="front">프론트</Option>
                        <Option value="back">백</Option>
                        <Option value="design">디자인</Option>
                        <Option value="design">기타</Option>
                </Select>
                <P>기타 메세지</P>
                <Input type="text" value={text} name="text" onChange={handleText} />
                <CheckBoxArea>
                    <CheckBox onClick={checkbox} agree={agree}></CheckBox>
                    <P onClick={checkbox} style={{margin:"0 10px"}}>개인정보 이용약관 동의</P>
                </CheckBoxArea>
                <Input type="submit" value="제출하기"/>
            </Form>
        </Wrap>
    );
}