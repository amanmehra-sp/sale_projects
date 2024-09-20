<template>
<div class="container">
   <div class="header">
    <h1>
     About Me
    </h1>
    <img :alt="'Profile picture of the author'" :src="my" width="120" height="120" />
   </div>
   <div class="section">
    <h2>
     Education
    </h2>
    <ul>
     <li>
      <i class="fas fa-graduation-cap">
      </i>
      10th from CBSE
     </li>
     <li>
      <i class="fas fa-graduation-cap">
      </i>
      12th in Science from CBSE
     </li>
     <li>
      <i class="fas fa-graduation-cap">
      </i>
      B.Tech in Computer Science Engineering
     </li>
    </ul>
   </div>
   <div class="section">
    <h2>
     Professional Summary
    </h2>
    <p>
     I am a dedicated and passionate computer engineering graduate from Rayat Bahra University, with a solid foundation in both theoretical knowledge and practical skills. My educational journey has equipped me with a comprehensive understanding of various aspects of computer science and engineering. Throughout my years at the university, I engaged in a wide range of coursework and hands-on projects that have honed my problem-solving abilities and critical thinking skills.
    </p>
    <p>
     During my time at Rayat Bahra University, I actively participated in coding competitions, hackathons, and technical workshops. These experiences not only expanded my technical expertise but also allowed me to collaborate effectively with peers and mentors. I'm proud to have been part of a vibrant and dynamic learning environment that encouraged innovation and creativity.
    </p>
   </div>
   <div class="section">
    <h2>
     Experience with Programming Languages
    </h2>
    <!-- <ul>
     <li>
      <i class="fas fa-briefcase">
      </i>
      Python Development - 1+ years
     </li>
    </ul> -->
    <div class="button-container">
     <div class="button">
      Python
     </div>
     <div class="button">
      HTML
     </div>
     <div class="button">
      CSS
     </div>
     <div class="button">
      JavaScript
     </div>
     <div class="button">
      Vue.js
     </div>
     <div class="button">
      Nuxt.js
     </div>
     <div class="button">
      Django
     </div>
     <div class="button">
      AI (Artificial Intelligence)
     </div>
     <div class="button">
      PHP
     </div>
     <div class="button">
      Laravel
     </div>
     <div class="button">
      Bootstrap
     </div>
     <div class="button">
      AI (Make)
     </div>
     <div class="button">
      AI (Botpress)
     </div>
    </div>
   </div>
   <!-- <div class="image-container">
    <img alt="Group of people smiling and posing for a photo outdoors" height="150" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-DIxSR3bqQQi9GYXtr9aRCmUS.png?st=2024-09-19T10%3A13%3A47Z&amp;se=2024-09-19T12%3A13%3A47Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-19T02%3A37%3A45Z&amp;ske=2024-09-20T02%3A37%3A45Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=9Ij/k4ThUsruIW49v9yN3o%2B70yw5e2qClFKLIxqh8eU%3D" width="400"/>
    <img alt="Group of students smiling and posing for a photo outdoors" height="150" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-EOmjbVFhqKwSeGJYqO2sgVrp.png?st=2024-09-19T10%3A53%3A58Z&amp;se=2024-09-19T12%3A53%3A58Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-19T02%3A01%3A51Z&amp;ske=2024-09-20T02%3A01%3A51Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=JUArHh3YvjlO0J1oHktrQJLHwU90ehLF85FUocXCH%2BA%3D" width="400"/>
   </div> -->
  </div>
</template>

<script>
import profilePic from '@/assets/group.jpeg'; // Update the path as needed
import my from '@/assets/my.jpg'; // Update the path as needed

export default {
  name: 'About',
  data() {
    return {
      profilePic,my
    };
  }
};
</script>

<style scoped>
 .container {
            width: 60%;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header img {
            border-radius: 50%;
            width: 120px;
            height: 120px;
            margin-top: 20px;
        }
        .header h1 {
            color: #ff4500;
        }
        .section {
            margin-top: 20px;
        }
        .section h2 {
            color: #ff4500;
            font-size: 24px;
        }
        .section ul {
            list-style: none;
            padding: 0;
        }
        .section ul li {
            margin: 10px 0;
            font-size: 18px;
        }
        .section ul li i {
            margin-right: 10px;
            color: #ff4500;
        }
        .section p {
            font-size: 16px;
            line-height: 1.6;
        }
        .image-container {
            text-align: center;
            margin-top: 20px;
        }
        .image-container img {
            width: 45%;
            height: auto;
            margin: 2.5%;
        }
        .button-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }
        .button-container .button {
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        @media (max-width: 768px) {
            .container {
                width: 100%;
                padding: 0px;
            }
            .header {
                flex-direction: row-reverse;
                justify-content: space-between;
                align-items: center;
            }
            .header img {
                margin-right: 0;
                /* margin-left: 10px; */
            }
            .header h1 {
                font-size: 28px;
            }
            .section h2 {
                font-size: 20px;
            }
            .section ul li {
                font-size: 16px;
            }
            .section p {
                font-size: 14px;
            }
            .button-container .button {
                font-size: 14px;
                padding: 8px 16px;
            }
            .image-container img {
                width: 100%;
                max-width: 200px;
                margin: 10px 0;
            }
        }
</style>
