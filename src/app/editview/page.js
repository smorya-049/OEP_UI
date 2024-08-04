'use client'

import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { PiSwapDuotone } from "react-icons/pi";

const initialData = [
  {
    number: 1,
    question: "What is climate change?"
  },
  {
    number: 2,
    question: "Who is your favourite cartoon?"
  }
];

export default function Home() {
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSave = () => {
    setEditIndex(null);
  };

  const handleCancel = () => {
    setData(initialData);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(data[index].question);
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  const handleInputBlur = (index) => {
    const newData = [...data];
    newData[index].question = editText;
    setData(newData);
    setEditIndex(null);
  };

  return (
    <div>
      <main className="container mx-auto p-20">
        <h2 className='text-1xl md:text-2xl lg:text-2xl font-light'>Exam Name:</h2>
        <h2 className='text-1xl md:text-2xl lg:text-2xl font-light'>Exam Key:</h2>
        <QuestionList 
          data={data} 
          editIndex={editIndex} 
          editText={editText} 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
        <div className="flex space-x-4 justify-center">
          <button 
            className="bg-blue-500 text-white border border-black px-4 py-2 rounded-[20px]" 
            onClick={handleSave}
          >
            Save
          </button>
          <button 
            className="bg-gray-500 text-white border border-black px-4 py-2 rounded-[20px]" 
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
}

const QuestionList = ({ data, editIndex, editText, handleDelete, handleEdit, handleInputChange, handleInputBlur }) => {
  return (
    <div className="container mx-auto p-4">
      {data.map((item, index) => (
        <div key={item.number} className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
            {item.number}
          </div>
          {editIndex === index ? (
            <input
              type="text"
              value={editText}
              onChange={handleInputChange}
              onBlur={() => handleInputBlur(index)}
              className="flex-grow ml-4 p-2 border border-black bg-gray-200 font-bold border rounded-[20px]"
            />
          ) : (
            <input
              type="text"
              value={item.question}
              readOnly
              className="flex-grow ml-4 p-2 border border-black bg-gray-200 font-bold border rounded-[20px] "
            />
          )}
          <DropdownButton 
            className="ml-4" 
            onEdit={() => handleEdit(index)} 
            onDelete={() => handleDelete(index)}
          />
        </div>
      ))}
    </div>
  );
};

const DropdownButton = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleEditClick = () => {
    onEdit();
    setIsOpen(false);
  };

  const handleDeleteClick = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <PiDotsThreeOutlineVerticalBold />
      </button>
      {isOpen && (
        <div className="absolute left-0 h-30 border rounded text-sm shadow-lg bg-black text-white mt-1 rounded shadow-lg">
          <ul>
            <li className="p-2 hover:bg-gray-700 cursor-pointer flex" onClick={handleEditClick}>
              <FaRegEdit /> Edit
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer flex" onClick={handleDeleteClick}>
              <RiDeleteBin5Line /> Delete
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer flex">
              <PiSwapDuotone /> Move
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
