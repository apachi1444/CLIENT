import {Row,Button,Col,Container, Form} from 'react-bootstrap';
import {ExclamationCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Annonce from '../model/annonce';
import '../css/form_css.css';


const Page2 =()=>{

    let navigate = useNavigate();

    const [titre,setTitre] = useState('');
    const [prix,setPrix] = useState('');
    const [description,setDescription] = useState('');
    const [nb_room,setNb_room] = useState('');
    const [surf,setSurf] = useState('');
    const [caut,setCaut] = useState('');
    const [others,setOthers] = useState('');

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = document.getElementById("myform2");
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <Container fluid style={{background:'#EFECEC'}}>
            <Row>
                <Button className="btn btn-warning">en attandant d'ajouter le header</Button>
            </Row>
            <Row style={{paddingBottom:'100px',paddingTop:'50px'}}>
                        <Col lg={3} style={{zIndex:'1'}}>
                            <div className='boule_active'>1</div>
                            <div style={{color:"#130681",marginLeft:"30%"}}>Informations<br/>Générales</div>
                        </Col>
                        <Col lg={3} style={{zIndex:'1'}}>
                            <div className='boule_active'>2</div>
                            <div style={{color:"#130681",marginLeft:"30%"}}>Description<br/>Générale</div>
                        </Col>
                        <Col lg={3} style={{zIndex:'1'}}>
                            <div className='boule_inactive'>3</div>
                            <div style={{marginLeft:"30%"}}>Images</div>
                        </Col>
                        <Col lg={3} style={{zIndex:'1'}}>
                            <div className='boule_inactive'>4</div>
                            <div style={{marginLeft:"30%"}}>Informations<br/>personelles</div>
                        </Col>
                    </Row>
            <Row style={{background:"#D2ECEF"}}>
                <Row>
                    <Col lg={1} sm={1}></Col>
                    <Col lg={10} sm={10} style={{justifyContent:"center"}}>
                        <h3 style={{marginTop:"50px"}}>DESCRIPTION GENERALE</h3>
                        <div className='barre_sous_titre'></div>
                        <div style={{display:"flex"}}>
                            <ExclamationCircle color="red" size={20} />
                            <h5 style={{marginLeft:'20px',marginBottom:'10px'}}>Les champs avec (<span style={{color:'red'}}>*</span>) sont obligatoires !</h5>
                        </div>
                        <div style={{backgroundColor:"#fff",padding:"20px"}}>
                            <Form id="myform2" noValidated validated={validated}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridTitle">
                                        <Form.Label style={{fontSize:'20px'}}>(<span style={{color:'red'}}>*</span>) Titre de l'annonce</Form.Label>
                                        <Form.Control style={{boxShadow:"0px 0px 3px #000"}} onChange={(a)=>{
                                        setTitre(a.target.value)
                                    }} required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPrice">
                                        <Form.Label style={{fontSize:'20px'}}>(<span style={{color:'red'}}>*</span>) Prix</Form.Label>
                                        <Form.Control style={{boxShadow:"0px 0px 3px #000"}} onChange={(a)=>{
                                        setPrix(a.target.value)
                                    }} required/>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="FormDescription">
                                    <Form.Label style={{fontSize:'20px'}}>Description</Form.Label>
                                    <Form.Control as="textarea" style={{boxShadow:"0px 0px 3px #000"}} rows={5} onChange={(a)=>{
                                        setDescription(a.target.value)
                                    }}/>
                                </Form.Group>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} controlId="formGridRooms">
                                        <Form.Label style={{fontSize:'15px'}}>nombre de<br/>chambres</Form.Label>
                                        <Form.Select style={{boxShadow:"0px 0px 3px #000"}} onChange={(a)=>{
                                            setNb_room(a.target.value)
                                        }} required>
                                            <option></option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridSize">
                                        <Form.Label style={{fontSize:'15px'}}>Surface totale<br/>(en m²)</Form.Label>
                                        <Form.Select style={{boxShadow:"0px 0px 3px #000"}} onChange={(a)=>{
                                            setSurf(a.target.value)
                                        }}>
                                            <option></option>
                                            <option>10-20</option>
                                            <option>20-30</option>
                                            <option>30-40</option>
                                            <option>40-</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCaution">
                                        <Form.Label style={{fontSize:'15px'}}>Caution<br/>(en drhs)</Form.Label>
                                        <Form.Select style={{boxShadow:"0px 0px 3px #000"}} onChange={(a)=>{
                                            setCaut(a.target.value)
                                        }} required>
                                            <option></option>
                                            <option>0-500</option>
                                            <option>500-1000</option>
                                            <option>1000-1500</option>
                                            <option>1500-</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <h5 style={{textDecoration:'underline',marginBottom:"30px"}}>Services<br/>supplémentaires</h5>
                                <Form.Group as={Col} controlId="formGridOthers">
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="wifi"
                                        name="group1"
                                        type="checkbox"
                                        id={"wifi"}
                                    />
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="climatisation"
                                        name="group1"
                                        type="checkbox"
                                        id={"clim"}
                                    />
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="chauffage"
                                        type="checkbox"
                                        id={"chauffage"}
                                    />
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="Parking"
                                        type="checkbox"
                                        id={"Parking"}
                                    />
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="concierge"
                                        type="checkbox"
                                        id={"concierge"}
                                    />
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="sécurité"
                                        type="checkbox"
                                        id={"securite"}
                                    />
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="balcon"
                                        type="checkbox"
                                        id={"balcon"}
                                    />
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="terasse"
                                        type="checkbox"
                                        id={"terasse"}
                                    />
                                    <Form.Check
                                        onChange={(e)=>{
                                            setOthers(others+" "+e.target.id);
                                        }}
                                        inline
                                        label="autres"
                                        type="checkbox"
                                        id={"autres"}
                                    />
                                </Form.Group>
                                
                            </Form>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-around",marginTop:'100px',marginBottom:"100px"}}>
                                    <Button type="submit" className="btn btn-default" style={{color:"#07436b",backgroundColor:"#fff"}} onClick={()=>{
                                    navigate('/');
                                }}>Précédent</Button>  
                                    <Button type="submit" onClick={(e)=>{
                                        handleSubmit(e);
                                        if(document.getElementById("myform2").checkValidity()===true){
                                            Annonce["titre"]=titre;
                                            Annonce["prix"]=prix;
                                            Annonce["description"]=description;
                                            Annonce["nbRooms"]=nb_room;
                                            Annonce["size"]=surf;
                                            Annonce["caution"]=caut;
                                            Annonce["supplementaire"]=others;
                                            navigate('/form_page3');
                                        }else{
                                            alert("Veuillez valider tout les champs svp!!!");
                                        }
                                }}>Continuer</Button>    
                        </div>
                    </Col>
                    <Col lg={1} sm={1}></Col>
                </Row>
            </Row>
            <Row>
                <div style={{height:"500px"}}>
                    La suite
                </div>
            </Row>
        </Container>

    );
}

export default Page2;