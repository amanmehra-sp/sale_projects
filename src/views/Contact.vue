<template>
  <div>
    <div class="container">
      <div class="contact-info">
          <h2>Contact Us shivam change</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div class="info-container">
  <div class="info-item">
    <i class="fas fa-home"></i>
    <div>
      <h3>Address</h3>
      <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
    </div>
  </div>
  <div class="info-item">
    <i class="fas fa-phone"></i>
    <div>
      <h3>Phone</h3>
      <p>571-457-2321</p>
    </div>
  </div>
  <div class="info-item">
    <i class="fas fa-envelope"></i>
    <div>
      <h3>Email</h3>
      <p>ntamerrwael@mfano.ga</p>
    </div>
  </div>
</div>

      </div>
      <div class="contact-form">
          <h2>Send Message</h2>
          <form>
              <input type="text" placeholder="Full Name" required>
              <input type="email" placeholder="Email" required>
              <textarea placeholder="Type your Message..." required></textarea>
              <button type="submit">Send</button>
          </form>
      </div>
  </div>
  </div>
</template>

<script>
export default {
name: 'Contact',
};
</script>

<style scoped>
/* General styling */
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
}
.contact-info, .contact-form {
  flex: 1;
  min-width: 300px;
  margin: 20px;
  box-sizing: border-box;
}
.contact-info h2, .contact-form h2 {
  font-size: 36px;
  margin-bottom: 20px;
}
.contact-info p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 40px;
}
.contact-info .info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.contact-info .info-item i {
  font-size: 24px;
  background: #fff;
  color: #000;
  border-radius: 50%;
  padding: 10px;
  margin-right: 20px;
}
.contact-info .info-item h3 {
  font-size: 20px;
  margin: 0;
  color: #00bcd4;
}
.contact-info .info-item p {
  margin: 5px 0 0 0;
  color: #000000;
}
.contact-form {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}
.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.contact-form button {
  background: #00bcd4;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
}
.contact-form button:hover {
  background: #0097a7;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .container {
      flex-direction: column;
      padding: 20px;
  }
  .contact-info, .contact-form {
      margin: 20px 0;
      width: 100%;
  }
  .contact-info h2, .contact-form h2 {
      font-size: 30px;
  }
  .contact-form {
      max-width: 100%;
      padding: 20px;
  }
}

@media (max-width: 480px) {
  .container {
      padding: 10px;
  }
  .contact-info h2, .contact-form h2 {
      font-size: 24px;
  }
  .contact-info p {
      font-size: 14px;
  }
  .contact-info .info-item i {
      font-size: 20px;
      padding: 8px;
  }
  .contact-info .info-item h3 {
      font-size: 18px;
  }
  .contact-info .info-item p {
      font-size: 14px;
  }
  .contact-form h2 {
      font-size: 20px;
  }
  .contact-form input, .contact-form textarea {
      font-size: 14px;
  }
  .contact-form button {
      font-size: 14px;
      padding: 10px;
  }
}


</style>
