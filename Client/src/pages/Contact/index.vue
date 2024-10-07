<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="title">Contact Us</h1>
    <h2 class="subtitle">We'd love to hear from you</h2>

    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" /><br /><br />
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" /><br /><br />
      <label for="message">Message:</label><br />
      <textarea id="message" name="message" rows="4" cols="50"></textarea><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style scoped></style>
