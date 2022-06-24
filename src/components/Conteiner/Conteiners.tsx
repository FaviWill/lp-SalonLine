import './Containers.scss';
import {Container, Col, Row} from "react-bootstrap";


export function Containers() {
    return (
        <div className="container-pink-lp">
            <Container>
                <Row className="flex p-md-5 p-sm-3 container-pink-lp">
                        <Col md={6} sm={12} className="align-content-center">
                            <h2 className="pb-1 title-1">#todecacho é para todos estilos</h2>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/HifXcO8qANA"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </Col>
                        <Col className=" justify-content-md-center">
                            <p className="p-md-5 p-sm-2 text-1">
                                #todecacho é a marca mais amada das crespas e cacheadas e tá cheia de novidades para
                                você
                                estilizar
                                seu cabelo: pomadas, gelatinas e novos pigmentantes e matizadores. O estilo que você
                                quiser,
                                vai
                                de
                                #todecacho!
                            </p>
                        </Col>
                </Row>
            </Container>


            <div className="container-bg-lp">
                <Container>
                    <Col className="pt-5" md={{span: 6, offset: 2}}>
                        <h2 className="mt-md-5 mt-sm-3 title-2">É #todecacho no style!</h2>
                        <p className="pt-1 text-2 text">
                            Olha no espelho, ajeita o baby hair<br/>
                            Fica no estilo que <br/>
                            você quiser<br/>
                            <br/>
                            Passa a gelatina Bonita,<br/>
                            vem pro baile #todecacho<br/>
                            deixa você no style<br/>
                            <br/>
                            É #todecacho no style<br/>
                            É pra você estilo Salon Line<br/>
                            Eu sempre quero mais<br/>
                            Na cor eu dou um gás<br/>
                            Estilo #todecacho quem gosta vem atrás<br/>
                            <br/>
                            Chama as amigas pra vibe colorida<br/>
                            É só com #todecacho
                        </p>
                    </Col>
                </Container>
            </div>
        </div>
    );
}
