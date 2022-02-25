import {Row,Button,Col,Container, Form} from 'react-bootstrap';
import {Camera, ExclamationCircle} from 'react-bootstrap-icons';
import Annonce from '../model/annonce';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_css.css';

const Page3 =()=>{

    let navigate = useNavigate();

    const [images,setImages]=useState(null);

    const [validated, setValidated] = useState(true);

    const checkSize=(elems)=>{
        let maxSize=elems[0].size;
        for(let i=1;i<elems.length;i++){
            if(maxSize < elems[i].size){
                maxSize=elems[i].size;
            }
        }
        return maxSize;
    }


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
                            <div className='boule_active'>3</div>
                            <div style={{color:"#130681",marginLeft:"30%"}}>Images</div>
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
                        <h3 style={{marginTop:"50px"}}>IMAGES</h3>
                        <div className='barre_sous_titre'></div>
                        <div style={{display:"flex"}}>
                            <ExclamationCircle color="red" size={20} />
                            <h5 style={{marginLeft:'20px',marginBottom:'10px'}}>Les champs avec (<span style={{color:'red'}}>*</span>) sont obligatoires !</h5>
                        </div>
                        <div style={{backgroundColor:"#fff",padding:"20px",zIndex:'0'}}>
                            <Form id="myform3" noValidated validated={validated}>
                                <Row className="mb-3">
                                    <Col lg={6}>
                                        <h4 style={{textDecoration:"underline"}}>Images<br/>(au maximum 8)<br/>(taille maximale 3Mb)</h4>
                                    </Col>
                                    <div style={{width:"400px",borderStyle:"dashed",height:"400px",background:"#FFF3D4",alignItems:"center"}}>
                                        <Form.Group as={Col} controlId="formGridPrice">
                                            <Camera color="blue" size={200} style={{marginLeft:"25%"}}/>
                                            <Form.Control type="file" accept="image/*" style={{boxShadow:"0px 0px 3px #000"}} multiple  onChange={(img)=>{
                                                if(img.target.files.length > 8){
                                                    alert("Vous ne pouvez pas depasser plus de 8 images");
                                                    document.getElementById("formGridPrice").value=null;
                                                    setValidated(false);
                                                }else if(checkSize(img.target.files)>3*1024*1024){
                                                    alert("Vous ne pouvez pas dépasser 3Mb par image");
                                                    document.getElementById("formGridPrice").value=null;
                                                    setValidated(false);
                                                }else{
                                                    setImages(img.target.files);
                                                    setValidated(true);
                                                }
                                                
                                            }}/>
                                        </Form.Group>
                                    </div>
                                </Row>

                            </Form>
                        </div>
                        <div style={{zIndex:"1",display:"flex",justifyContent:"space-around",marginTop:'100px',marginBottom:"100px"}}>
                            <Button type="submit" className="btn btn-default" style={{color:"#07436b",backgroundColor:"#fff"}} onClick={()=>{
                                    navigate('/form_page2');
                                }}>Précédent</Button>  
                            <Button type="submit" onClick={(e)=>{
                                    if(validated===true){
                                        Annonce["images"]=images;
                                        navigate('/form_page4');
                                    }else{
                                        setImages(null);
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

export default Page3;