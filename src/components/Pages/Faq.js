
import React from 'react'
import "antd/dist/antd.css";
import { Collapse } from 'antd';

const { Panel } = Collapse;

function Faq() {
    return (
        <div className="section-bg ">
            <div className="container">
                <div className="section-faq">
                    <h2 >F.A.Q</h2>
                    <span className="ques">Frequently Asked Questions</span>
                    <Collapse>
                        <Panel header="Many web design companies commit that they can fulfill the requirement of project but after ordering project,they can not do this.How can we understand that you fulfill my requirement after cordering" key="1">

                            <p>Ans: First we say, we follow our company rules step by step:
                            <ul>
                                    <li> First, our project manager discuss about the project/website in details. If needed, our project manager can discuss many times. If we are capable to complete the project then we confirm you for ordering the project and clearly discuss about the project price.</li>
                                    

                                    <li> At the time of ordering, all the project details with project price and advance payment written in two copies of our company letter head paper. One copy is for our client and another for us. And both copies are duly singed by both parties. So there is no confusion for project flow and price.</li>

                                    <li> After ordering , we start layout design of home page. Then it is sent to customer for approval. If there is any modification needed then we update the template. We update the template until the client is satisfied.</li>

                                    <li> After the design is approved, then we start development of project.</li>

                                    <li> After completion of project, we start testing and then we give it to the client for checking.</li>

                                    <li> After final approval of the client, we upload the website on main domain.</li>

                            </ul>
                            </p>

                        </Panel>
                        <Panel header="After completion of a website, for how many days will you give us support?" key="2">

                            <p>Ans:We will give you free technical support for life time if your website is hosted in our server. Actually maximum problems arise from server. As we have full access to our server. So we can recover any type of problem. But if you host your website to another company’s server. we can not solve the problem.</p>

                        </Panel>
                        <Panel header="Have you any AMC (Annual maintenance charge)?" key="3">

                            <p>Ans:No.</p>

                        </Panel>
                        <Panel header="Can I extra page in my website later?" key="4">

                            <p>Ans:Yes, There is an extra cost for the extra pages.</p>

                        </Panel>
                        <Panel header="After Developing our website,can i upgrade the website from another developer?" key="5">

                            <p>Ans: Yes</p>

                        </Panel>
                        <Panel header="Whether i have to purchase a domain and web hosting if i only want to order website?" key="6">

                            <p>Ans: Yes you can only order website</p>

                        </Panel>
                        <Panel header="To Develop website,which documents i have to provide you?" key="7">

                            <p>Ans:You have to provide website text and digital photo.</p>

                        </Panel>
                        <Panel header="How to Secure my website, explain me." key="8">

                            <p>Ans:We always try to secure your website from our experience. We use url rewrite rule using htaccess. Double layer security on admin folder- Server layer security and script level security. For uploading file, check file type from server level. password encrypted to encrypted mode to protect from sql injection.</p>

                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Faq
