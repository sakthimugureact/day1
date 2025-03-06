import React from 'react'

function Task4() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Task 4</h1>
    <h1>Installing Node.js and Checking Version</h1>

<p>Installing Node.js and checking its version is a straightforward process, though it can vary slightly depending on your operating system. Here's a general guide covering the most common methods:</p>

<h2>1. Installation:</h2>

<h3>From the Node.js Website:</h3>
<ul>
  <li>The most common method is to download the installer directly from the official Node.js </li>
  <li>You'll find installers for Windows, macOS, and Linux.</li>
  <li>It's generally recommended to download the "LTS" (Long-Term Support) version for stability.</li>
  <li>The installer typically includes npm (Node Package Manager) as well.</li>
  <li>Follow the on-screen instructions to complete the installation.</li>
</ul>

<h3>Using a Node Version Manager (NVM):</h3>
<ul>
  <li>NVM is highly recommended, especially if you need to work with multiple Node.js versions.</li>
  <li>It allows you to easily switch between different Node.js versions.</li>
  <li><b>For macOS and Linux:</b>
    <ul>
      <li>You can install NVM using <code>curl</code> or <code>wget</code>. The Node.js website and the NVM github page provide the most up to date installation instructions.</li>
    </ul>
  </li>
  <li><b>For Windows:</b>
    <ul>
      <li><code>nvm-windows</code> is a popular alternative.</li>
    </ul>
  </li>
  <li>Using NVM, you can then install specific Node.js versions using commands like <code>nvm install &lt;version&gt;</code>.</li>
</ul>

<h3>Using Package Managers (Linux):</h3>
<ul>
  <li>On Linux distributions, you can often install Node.js using your distribution's package manager (e.g., <code>apt</code>, <code>yum</code>, <code>dnf</code>).</li>
  <li>However, the versions available through package managers might not always be the latest.</li>
</ul>

<h2>2. Checking the Version:</h2>

<ul>
  <li><b>Open your terminal or command prompt.</b></li>
  <li><b>To check the Node.js version, type the following command and press Enter:</b>
    <ul>
      <li><code>node -v</code></li>
    </ul>
  </li>
  <li><b>To check the npm version, type the following command and press Enter:</b>
    <ul>
      <li><code>npm -v</code></li>
    </ul>
  </li>
</ul>
<hr></hr>
    </>
  )
}

export default Task4