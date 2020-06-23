import React, { Component } from "react";
import { List, ListItemContent, ListItem } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="txt-header">Our Mission</h1>

        <div>
          <p className="text">
            {" "}
            With the help of the DoD, our team plans our pushing the state of
            object detection and explore whole new regions. We are focused on
            using Yolo and RCNN to help detect objects in real time. Our endterm
            goal is to be able to detect objects using live footage. At the time
            of writing this, we are working on counter drone swarm. We strive to
            help and improve the solutions to any issues facing our national
            security!
          </p>
        </div>

        <h2 className="txt-header">Meet the team</h2>

        <div className="contact-grid">
          <List>
            <ListItem>
              <ListItemContent icon="person">Justin John</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent icon="person">Nicholas Cali</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent icon="person">Zachary Marvin</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent icon="person">Mukund Iyengar</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent icon="person">Victor Lawrence</ListItemContent>
            </ListItem>
          </List>
        </div>

        <p>
          <dl className="description">
            <dt>Justin John</dt>

            <dd>
              --is a rising Senior at Stevens Institute of Technology who
              studies Computer Engineering and is well versed in C++ and Python.
              He is currently learning OpenCV, YOLO, RetinaNet, and variety of
              other programming languages to ensure the sucess of this project.
            </dd>

            <dt>Nicholas Cali</dt>

            <dd>
              --is a rising Sophomore at Stevens Institute of Technology who
              studies Cybersecurity. After exploring OpenCV and YOLO, he has
              taken a real interest and passion into Computer Version.
            </dd>

            <dt>Zachary Marvin</dt>

            <dd>
              --is a rising Sophomore at Stevens Institute of Technology who
              studies Biomedical Engineering. Zachary has a passion for
              programming and his favorite programming language is JavaScript.
            </dd>

            <dt>Mukundan Iyengar</dt>

            <dd>
              --is a Professor at Stevens Institute of Technology who is well
              versed in: Multimedia Streaming, Information-retrieval/Data
              Mining, and Large Scale Data Visualiazation. He teaches several
              courses at Stevens such as Computational Data Structures and
              Algorithms, Introduction to Programming, Special Topics in
              Computer Engineering, and so many other class.
            </dd>

            <dt>Victor Lawrence</dt>

            <dd>
              --is a Professor at Stevens Institute of Technology who
              specializes in Signal Processing and Intelligent Communication
              Networks. He teaches a variety of course such as Design and
              Analysis of Network Systems and etc.
            </dd>
          </dl>
        </p>
      </div>
    );
  }
}
export default About;
