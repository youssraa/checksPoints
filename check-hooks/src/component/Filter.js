import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import '../App.scss'

const  Filter =({handelClick,StarChange})=> {
   
        return (
            
            <ProSidebar className="sidebar">
            <Menu iconShape="square">
              <MenuItem>Best Movies</MenuItem>
              <SubMenu title="Sort Movies of Rating" >
                <SubMenu title="Top of Rationg" >
                <MenuItem  value={5} onKeyUp={(e)=>StarChange(e.target.value)}>Great</MenuItem>
                <MenuItem value={4} onclick={(e)=>StarChange(e.target.value)}> Good</MenuItem>
              </SubMenu> 
              <SubMenu title="Top of Average" >
                <MenuItem value={3} onclick={(e)=>StarChange(e.target.value)}>Average</MenuItem>
                <MenuItem value={2} onclick={(e)=>StarChange(e.target.value)}> Worset</MenuItem>
                <MenuItem value={1}onclick={(e)=>StarChange(e.target.value)}> Bad</MenuItem>
              </SubMenu> 
              </SubMenu>
              <SubMenu title="Manipulate Movies" >
                <MenuItem onClick={handelClick}>Add Movies</MenuItem>
                <MenuItem>Remove</MenuItem>
              </SubMenu> 
              </Menu>   
          </ProSidebar>        

        );
    }



export default Filter
