"use client";
import React, { useTransition, useState,useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between", // Adjust spacing as needed
    margin: "0 auto", // Center the row horizontally (optional)
  },
  cardRow: {
    display: "flex",
    flexWrap: "wrap", // Allow cards to wrap to multiple rows if necessary
    width: "50%", // Ensure full width for responsive behavior
  },
  card: {
    flex: "0 0 25%", // Set card width to 25% of container width
    margin: "10px", // Adjust margins as needed
    padding: "15px",
    border: "1px solid #ddd", // Optional border
    borderRadius: "5px", // Optional rounded corners
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // Optional subtle shadow
  },
  cardImage: {
    width: "100%", // Ensure image fills the card width
    marginBottom: "10px", // Add spacing below the image
  },
};

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    // image: "/images/projects/1.png",
    // tag: ["All", "Web"],
    // gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    // image: "/images/projects/2.png",
    // tag: ["All", "Web"],
    // gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    // image: "/images/projects/3.png",
    // tag: ["All", "Web"],
    // gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    // image: "/images/projects/4.png",
    // tag: ["All", "Mobile"],
    // gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    // image: "/images/projects/5.png",
    // tag: ["All", "Web"],
    // gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    // image: "/images/projects/6.png",
    // tag: ["All", "Web"],
    // gitUrl: "/",
    // previewUrl: "/",
  },
];


// Create a reusable Card component
const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      {/* {image && <img src={image} alt={title} className="card-image" />} */}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Achievement = () => { 
  return (
    <div className="card-container text-center text-1xl font-bold text-white">
      <div className="card-row text-white flex items-center gap-2 py-6">
        <div className="sm:border-[#33353F] sm:border rounded-md py-5 px-10 flex flex-col sm:flex-row items-center ">
          {/* {image && <img src={image} alt={title} className="card-image" />} */}
          <div className="flex flex-row">
            <div className="text-white font-bold  mx-10 my-5 ">
              <h3 className="text-2xl">Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
            </div>
            <div className="text-white font-bold  mx-10 my-5 ">
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
            </div>
            <div className="text-white font-bold flex flex-row mx-20 my-10 sm:my-0"></div>
          </div>
        </div>
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {/* {image && <img src={image} alt={title} className="card-image" />} */}
          <div className="flex flex-row gap-10 py-6">
            <div className="card-content">
              <h3 className="text-2xl">Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
            </div>
            <div className="card-content">
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
            </div>
          </div>
        </div>
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {/* {image && <img src={image} alt={title} className="card-image" />} */}
          <div className="flex flex-row gap-10 py-6">
            <div className="card-content">
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
            </div>
            <div className="card-content">
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
            </div>
          </div>
        </div>
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {/* {image && <img src={image} alt={title} className="card-image" />} */}
          <div className="flex flex-row gap-10 py-6">
            <div className="card-content">
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
              <h3>Html</h3>
              <p className="text-1xl">Advance</p>
            </div>
            <div className="card-content">
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
            </div>
          </div>
        </div>
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {/* {image && <img src={image} alt={title} className="card-image" />} */}
          <div className="flex flex-row gap-10 py-6">
            <div className="card-content">
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
            </div>
            <div className="card-content">
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
              <h3>Html</h3>
              <p>Advance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
