import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Proyek Aplikasi tugas akhir semester',
        description: 'Bersama teman kelompok saya,kami bekerja sama untuk menyelesaikan website seperti shoppe,tokopedia dan lainnya dengan nama "Loving Shop"'
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Sistem Informasi Supermarket',
        description: 'Sistem yang saya kerjakan untuk tugas akhir suatu matkul'
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Sistem Informasi rumah sakit "Bakti Husada" ',
        description: 'Tugas yang saya kerjakan untuk tugas akhir suatu mata kuliah'
    },
    {
        // // image: require(`../../../assets/images/simplifying.png`),
        title: 'Omorfo App',
        description: 'Apps untuk melihat skincare apa yang cocok di pakai berdasarkan tipe kulit,usia'
    },
    {
        // image: require(`../../../assets/images/news.png`),
        title: 'Proyek Applikasi Book My Talent',
        description: 'Aplikasi pemesanan bakat untuk menyelenggarakan event  '
    },
    {
        // image: require(`../../../assets/images/both-time.png`),
        title: 'Reminder Jadwal Sholat dan amalan yang baik',
        description: 'Masih dalam pengerjaan'
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    Sudah Pernah Ngerjain Apa Aja ?
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                  Beberapa pekerjaan saya kerjakan karena keterpaksaan dan cuan hehe, here we go :
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#4D5AF2',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;