import React from 'react';
//import NavBar from '../components/Navbar/NavBar';
//import Footer from '../components/Footer';

const DevOpsSyllabus = () => {
  return (
    <>
      {/* <NavBar /> */}
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mb-4">DevOps Syllabus</h1>

            <h2 className="text-blue-500 font-bold mb-4">Introduction</h2>
            <ul className="list-disc ml-8">
              <li>Course Features and Tools</li>
              <li>What is DevOps?</li>
              <li>A brief overview of the history of DevOps</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Culture</h2>
            <ul className="list-disc ml-8">
              <li>The Goals of DevOps</li>
              <li>DevOps vs Traditional Silos</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Concepts and Practices</h2>
            <ul className="list-disc ml-8">
              <li>Build Automation</li>
              <li>Continuous Integration</li>
              <li>Continuous Delivery and Continuous Deployment</li>
              <li>Infrastructure as Code</li>
              <li>Configuration Management</li>
              <li>Container Orchestration</li>
              <li>Monitoring</li>
              <li>Microservices</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Tools</h2>
            <ul className="list-disc ml-8">
              <li>Introduction to DevOps Tools</li>
              <li>Tools for Building Automation and Continuous Integration</li>
              <li>Tools for Configuration Management</li>
              <li>Tools for Virtualization and Containerization</li>
              <li>Tools for Monitoring</li>
              <li>Tools for Orchestration</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Source Code Management</h2>
            <h2 className="text-blue-500 font-bold mb-4">Git Basics / The Basics of Using Git [1 Hr 30 Min]</h2>
<ul className="list-disc ml-8">
  <li>Understanding the Git Filesystem</li>
  <li>Creating a Local Repository (Empty)</li>
  <li>Basic Configuration of Git</li>
  <li>Adding Files to Project</li>
  <li>The Status of your project</li>
  <li>Committing to Git</li>
  <li>Ignoring Certain File Types</li>
  <li>HOL: Creating Local Repositories with Git and Adding/Checking in Files</li>
</ul>

<h2 className="text-blue-500 font-bold mb-4">Tags, Branching, Merging and Reverting [45 Min]</h2>
<ul className="list-disc ml-8">
  <li>Using Tags</li>
  <li>Using Branches</li>
  <li>Merging Branches</li>
  <li>Rebasing</li>
  <li>Reverting a Commit</li>
  <li>Using the 'diff' Command</li>
</ul>

<h2 className="text-blue-500 font-bold mb-4">Git's Logs and Auditing [15 Min]</h2>
<ul className="list-disc ml-8">
  <li>Using Git's Logs</li>
</ul>

<h2 className="text-blue-500 font-bold mb-4">Cloning Repositories [1 Hr]</h2>
<ul className="list-disc ml-8">
  <li>Cloning Local Repositories</li>
  <li>Cloning Remote Repositories over HTTPS, SSH</li>
  <li>Forking</li>
  <li>HOL: Securing Your Github Account with SSH Keys</li>
  <li>HOL: Cloning a Remote GitHub Repository</li>
</ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsSyllabus;
