import {Row,Button,Col,Container, Form} from 'react-bootstrap';
import {ExclamationCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Annonce from '../model/annonce';
import '../css/form_css.css';


const Page1 =()=>{

    let navigate = useNavigate();

    const [annonce,setAnnonce] = useState('');
    const [ville,setVille] = useState('');
    const [quartier,setQuartier] = useState('');
    const [adresse,setAdresse] = useState('');
    const [url_maps,setUrl_maps] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = document.getElementById("myform1");
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <Container fluid style={{background:'#EFECEC'}}>
            <Row style={{paddingBottom:'100px',paddingTop:'50px', width: "80%", margin: "4px 10%"}}>
                        <Col lg={3}>
                            <div className='boule_active'>1</div>
                            <div style={{color:"#130681",margin:"2px 10%"}}>Informations<br/>Générales</div>
                        </Col>
                        <Col lg={3}>
                            <div className='boule_inactive'>2</div>
                            <div style={{margin:"2px 10%"}}>Description<br/>Générale</div>
                        </Col>
                        <Col lg={3}>
                            <div className='boule_inactive'>3</div>
                            <div style={{margin:"2px 10%"}}>Images</div>
                        </Col>
                        <Col lg={3}>
                            <div className='boule_inactive'>4</div>
                            <div style={{margin:"2px 10%"}}>Informations<br/>personelles</div>
                        </Col>
            </Row>
            <Row style={{background:"#D2ECEF"}}>
                <Row>
                    <Col lg={1} sm={1}></Col>
                    <Col  style={{justifyContent:"center"}}>
                        <h3 style={{marginTop:"50px"}}>INFORMATIONS GENERALES</h3>
                        <div className='barre_sous_titre'></div>
                        <div style={{display:"flex"}}>
                            <ExclamationCircle color="red" size={20} />
                            <h5 style={{marginLeft:'20px',marginBottom:'30px'}}>Les champs avec (<span style={{color:'red'}}>*</span>) sont obligatoires !</h5>
                        </div>
                        <Form id="myform1" noValidate validated={validated}>
                            
                            <Form.Group className="mb-3">
                                <Form.Label style={{fontSize:'20px'}}>
                                    (<span style={{color:'red'}}>*</span>) Type
                                </Form.Label>
                                <Form.Select style={{boxShadow:"0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)"}} onChange={(e)=>{
                                    setAnnonce(e.target.value)
                                }} required>
                                    <option></option>
                                    <option>Chambre</option>
                                    <option>Appartement</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{fontSize:'20px'}}>(<span style={{color:'red'}}>*</span>) Ville</Form.Label>
                                <Form.Select style={{boxShadow:"0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)"}} onChange={(a)=>{
                                    setVille(a.target.value)
                                }} required>
                                    <option></option>
                                    <option>Marrakech</option>
                                    <option>Pas d'autres pour le moment</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{fontSize:'20px'}}>(<span style={{color:'red'}}>*</span>) Quartier</Form.Label>
                                <Form.Select style={{boxShadow:"0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)"}} onChange={(a)=>{
                                    setQuartier(a.target.value)
                                }} required>
                                    <option></option>
                                    <option>Guéliz</option>
                                    <option>Jnane Awrad</option>
                                    <option>Sidi Abad</option>
                                    <option>Abwab Guéliz</option>
                                    <option>Saada</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{fontSize:'20px'}}>(<span style={{color:'red'}}>*</span>) Adresse</Form.Label>
                                <Form.Control style={{boxShadow:"0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)"}} placeholder="Tapez une adresse" onChange={(a)=>{
                                    setAdresse(a.target.value);
                                }} required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{fontSize:'20px'}}>Url Maps</Form.Label>
                                <Form.Control style={{boxShadow:"0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)"}} placeholder="Tapez une url Maps" onChange={(a)=>{
                                    setUrl_maps(a.target.value);
                                }}/>
                            </Form.Group>
                            
                        </Form>
                        <div style={{display:"flex",justifyContent:"space-around",marginTop:'100px',marginBottom:"100px"}}>
                            <Button type="submit" className="btn btn-default" 
                                style={{color:"#07436b",backgroundColor:"#fff"}} disabled>Précédent
                            </Button>  
                            <Button type="submit"  onClick={(e)=>{
                                handleSubmit(e);
                                if(document.getElementById("myform1").checkValidity()===true){
                                    Annonce["type"]=annonce;
                                    Annonce["ville"]=ville;
                                    Annonce["quartier"]=quartier;
                                    Annonce["adresse"]=adresse;
                                    Annonce["url"]=url_maps;
                                    navigate('/page2');
                                }else{
                                    alert("Veuillez valider tout les champs svp!!!");
                                }
                            }}>Continuer</Button>    
                        </div>
                    </Col>
                </Row>
            </Row>
            
        </Container>

    );
}

export default Page1;
