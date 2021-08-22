import "./aboutme.scss";

export default function Aboutme() {
    return (
        <div className="about" id="about">
        
            <h1>About me</h1>
            <div id="mainDiv"> </div>
            <img className="bgimg" src="myassets/bg4.jpg" alt="" />
            <div className="imgContainer">
<img src="myassets/myfoto.png" alt="" />
            </div> 
            <div className="container">
                <p className="para">
                    I am a pre final year student and primarily a <b>MERN Stack Developer </b>  
                    at <b>Vellore Institute of Technology</b>, pursuing my bachelors in Computer Science and Engineering.
<br />
<br />
          
                    I have now been working as MERN Stack Developer for the past 3 months building web apps , 
                    and have worked with various different frameworks. I also am keenly interested in Competitive Programming 
                    and solve problems on various online platforms like <b>CodeForces</b> , <b>CodeChef</b>, <b>HackerRank</b>  amongst others.
                    <br />
                    <br />
                    Apart from that I love attending social events such as wokshops and webinars. I love hearing about and
                     working on new ideas and projects, they make me challenge my limits and learn new stuff . And last but not the least I love playing Computer Games.
                    </p>
            </div>
        </div>
    )
}
