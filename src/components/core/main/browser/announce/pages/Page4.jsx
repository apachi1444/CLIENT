import {Row,Button,Col,Container, Form,InputGroup,FormControl} from 'react-bootstrap';
import {Envelope, ExclamationCircle, Person, Phone} from 'react-bootstrap-icons';
import { useState } from 'react';
import Annonce from '../model/annonce';
import '../css/form_css.css';

const Page4 =({cb})=>{
    const [nom_prenom,setNom_prenom]= useState('');
    const [email, setEmail]= useState('');
    const [tel,setTel]=useState('');

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = document.getElementById("myform4");
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    
        console.log("Hello");
        setValidated(true);
    };


    return(
        <Container fluid style={{background:'#EFECEC'}}>
            
            <Row style={{paddingBottom:'100px',paddingTop:'50px', width: "80%", margin: "4px 10%"}}>
                        <Col lg={3} style={{zIndex:'1'}}>
                            <div className='boule_active'>1</div>
                            {/* <div style={{color:"#130681",marginLeft:"30%"}}>Informations<br/>Générales</div> */}
                        </Col>
                        <Col lg={3} style={{zIndex:'1'}}>
                            <div className='boule_active'>2</div>
                            {/* <div style={{color:"#130681",marginLeft:"30%"}}>Description<br/>Générale</div> */}
                        </Col>
                        <Col lg={3} style={{zIndex:'1'}}>
                            <div className='boule_active'>3</div>
                            {/* <div style={{color:"#130681",marginLeft:"30%"}}>Images</div> */}
                        </Col>
                        <Col lg={3} style={{zIndex:'1'}}>
                            <div className='boule_active'>4</div>
                            {/* <div style={{color:"#130681",marginLeft:"30%"}}>Informations<br/>personelles</div> */}
                        </Col>
                    </Row>
            <Row style={{background:"#D2ECEF"}}>
                <Row>
                    <Col lg={1} sm={1}></Col>
                    <Col  style={{justifyContent:"center"}}>
                        <h3 style={{marginTop:"50px"}}>INFORMATIONS PERSONNELLES</h3>
                        <div className='barre_sous_titre'></div>
                        <div style={{display:"flex"}}>
                            <ExclamationCircle color="red" size={20} />
                            <h5 style={{marginLeft:'20px',marginBottom:'10px'}}>
                                Les champs avec (<span style={{color:'red'}}>*</span>) sont obligatoires !
                            </h5>
                        </div>
                        <div style={{backgroundColor:"#fff",padding:"20px",zIndex:'0'}}>
                            <Form id="myform4" noValidated validated={validated}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">
                                        <Person color="black" size={20}/>
                                    </InputGroup.Text>
                                    <FormControl
                                    placeholder="nom et prénom"
                                    aria-label="nom_prenom"
                                    aria-describedby="basic-addon1"
                                    onChange={(e)=>{
                                        setNom_prenom(e.target.value);
                                    }}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><Envelope color="black" size={20}/>
                                    </InputGroup.Text>
                                    <FormControl
                                    type="email"
                                    placeholder="email"
                                    aria-label="email"
                                    aria-describedby="basic-addon1"
                                    onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><Phone color="black" size={20}/>
                                    </InputGroup.Text>
                                    <FormControl
                                    placeholder="téléphone"
                                    aria-label="telephone"
                                    aria-describedby="basic-addon1"
                                    onChange={(e)=>{
                                        setTel(e.target.value);
                                    }}
                                    />
                                </InputGroup>
                            </Form>
                        </div>
                        <div style={{zIndex:"1",display:"flex",justifyContent:"space-around",marginTop:'100px',marginBottom:"100px"}}>
                            <Button type="submit" className="btn btn-default" style={{color:"#07436b",backgroundColor:"#fff"}} onClick={()=>{
                                    cb(false);
                                }}>Back</Button>  
                            <Button type="submit" onClick={(e)=>{
                                handleSubmit(e);
                                if(document.getElementById("myform4").checkValidity()){
                                    Annonce["nom_prenom"]=nom_prenom;
                                    Annonce["email"]=email;
                                    Annonce["telephone"]=tel;
                                }else{
                                    alert("Verify the required fields please!!");
                                }
                                
                            }}>Finish</Button>    
                        </div>
                    </Col>
                    <Col lg={1} sm={1}></Col>
                </Row>
            </Row>
            
        </Container>

    );
}
Page4.defaultProps={
    cb:(page)=>{

    }
}
export default Page4;
