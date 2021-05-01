<template>
  <div id="app-footer">
    <!-- Footer -->
    <footer class="page-footer font-small unique-color-dark pt-4">
      <!-- Footer Elements -->
      <div class="container">
        <!-- Call to action -->
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1">Register for free</h5>
          </li>
          <li class="list-inline-item">
            <a
              href="#!"
              id="register-btn"
              class="btn btn-outline-white btn-rounded"
              >Sign up!</a
            >
          </li>
        </ul>
        <!-- Call to action -->
      </div>
      <!-- Footer Elements -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
#app-footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 200px;  
  background-color: #25473a;
  color: #bfc9c6;
}

#register-btn {
  border: 1px solid #bfc9c6;
  color: #bfc9c6;
  padding: 15px;
  border-radius: 20px;
  margin-left: 10px;
}

#register-btn:hover {
  background-color: #bfc9c6;
  color: #25473a;
}
</style>