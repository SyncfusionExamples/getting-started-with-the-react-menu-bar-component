import React from 'react';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import './App.css';

function App() {
  //Hierarchical Data
  const menuItems: MenuItemModel[] = [
    {
      text: "File",
      iconCss: "em-icons e-file",
      items: [
        {text: "Open"},
        { text: 'Save' },
        { separator: true },
        { text: 'Exit' }
      ]
    },
    {
      text: 'Edit',
      items: [
          { text: 'Cut' },
          { text: 'Copy' },
          { text: 'Paste' }
      ]
  },
  {
      text: 'View',
      items: [
          {
              text: 'Toolbars',
              items: [
                  { text: 'Menu Bar' },
                  { text: 'Bookmarks Toolbar' },
                  { text: 'Customize' },
              ]
          },
          {
              text: 'Zoom',
              items: [
                  { text: 'Zoom In' },
                  { text: 'Zoom Out' },
                  { text: 'Reset' },
              ]
          },
          { text: 'Full Screen' }
        ]
    },
    {
        text: 'Tools',
        items: [
            { text: 'Spelling & Grammar' },
            { text: 'Customize' },
            { text: 'Options' }
        ]
    },
    {
        text: 'Help'
    }
  ]

  //Complex Data
  const complexData: object[] = [
    {
      continent: "Asia",
      countries: [
        {
          country: "India",
          languages: [
            {language: "English"},
            {language: "Tamil"},
            {language: "Hindi"}
          ]
        },
        {
          country: 'China',
          languages: [
              { language: 'Chinese' },
              { language: 'Cantonese' }
          ]
        },
        {
          country: 'Japan',
          languages: [
              { language: 'Japanese' }
          ]
        },
      ]
    },
    {
      continent: 'Africa',
      countries: [
        {
          country: 'Nigeria',
          languages: [
            { language: 'English' },
            { language: 'Hausa' }
          ]
        },
        {
          country: 'Egypt',
          languages: [
            { language: 'Arabic' }
          ]
        },
        {
          country: 'South Africa',
          languages: [
            { language: 'Tswana' },
            { language: 'Swati' }
          ]
        }
      ]
    },
    {
      continent: 'North America',
      countries: [
        {
          country: 'Canada',
          languages: [
            { language: 'French' }
          ]
        },
        {
          country: 'Mexico',
          languages: [
            { language: 'Spanish' }
          ]
        },
        {
          country: 'USA',
          languages: [
            { language: 'English' }
          ]
        }
      ]
    },
    {
      continent: 'South America',
      countries: [
        {
          country: 'Brazil',
          languages: [
            { language: 'Portuguese' }
          ]
        },
        {
          country: 'Colombia',
          languages: [
            { language: 'Spanish' }
          ]
        },
        {
          country: 'Argentina',
          languages: [
            { language: 'Spanish' }
          ]
        }
      ]
    },
    {
      continent: 'Oceania',
      countries: [
        {
            country: 'Australia'
        },
        {
            country: 'New Zealand'
        },
        {
            country: 'Samoa'
        },
      ]
    }
  ]

  //Self referential data
  const selfData: object[] = [
    {id:"parent1", text: "Events"},
    { id: 'parent2', text: 'Movies' },
    { id: 'parent3', text: 'Directory' },
    { id: 'parent4', pId: null, text: 'Queries' },
    { id: 'parent5', pId: null, text: 'Services' },
    { id: 'parent6', pId: 'parent1', text: 'Conferences' },
    { id: 'parent7', pId: 'parent1', text: 'Music' },
    { id: 'parent8', pId: 'parent1', text: 'Workshops' },
    { id: 'parent9', pId: 'parent2', text: 'Now Showing' },
    { id: 'parent10', pId: 'parent2', text: 'Coming Soon' },
    { id: 'parent10', pId: 'parent3', text: 'Media Gallery' },
    { id: 'parent11', pId: 'parent3', text: 'Newsletters' },
    { id: 'parent12', pId: 'parent4', text: 'Our Policy' },
    { id: 'parent13', pId: 'parent4', text: 'Site Map' },
    { id: 'parent14', pId: 'parent7', text: 'Pop' },
    { id: 'parent15', pId: 'parent7', text: 'Folk' },
    { id: 'parent16', pId: 'parent7', text: 'Classical' }
  ]
  return (
    <div className="App">
      <MenuComponent items={selfData} orientation="Vertical"
        fields={{
          itemId: "id",
          parentId: "pId",
          text: "text"
        }}></MenuComponent>
    </div>
  );
}

export default App;
