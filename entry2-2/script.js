body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f2ec;
  font-family: "Georgia", serif;
}

/* layout wrapper */
.container {
  max-width: 800px;
  text-align: center;
  padding: 30px;
}

/* typewriter text */
.typewriter {
  font-size: 24px;
  line-height: 1.6;
  color: #222;
  margin-bottom: 28px;
}

/* cursor */
.cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: #222;
  margin-left: 3px;
  animation: blink 0.8s infinite;
}

.cursor.done {
  animation: none;
  opacity: 0;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* center image */
.center-image {
  width: 270px;
  border-radius: 10px;
  margin: 20px auto 40px;
  display: block;
}

/* button row */
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

button {
  padding: 12px 30px;
  font-size: 16px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 5px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}
