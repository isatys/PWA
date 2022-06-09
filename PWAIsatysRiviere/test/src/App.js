import React from 'react';
import './App.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
  
export default function App() {
  return (
    <div class="cards">
    <article class="card">
        <header>
            <h2>Boulangerie</h2>
        </header>  
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
            <button><a href='https://google.com' alt='Broken Link' target="_blank">This is a button</a></button>
    </div>       
    </article>
            
     <article class="card">
        <header>
            <h2>Patisserie</h2>
        </header>  
        <div class="content">
            <p>Short content.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
            
    <article class="card">
        <header>
            <h2>Pizzeria</h2>
        </header>
        <div class="content">
            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                suggestion for reaching the North Pole by an aerostat.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                years ago. </p>
        </div>

    </article>
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>  
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
        </div>
            
    </article>
            
     <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>  
        <div class="content">
            <p>Short content.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
            
    <article class="card">
        <header>
            <h2>A longer heading in this card</h2>
        </header>
        <div class="content">
            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                suggestion for reaching the North Pole by an aerostat.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                years ago. </p>
        </div>

    </article>
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                years ago. </p>
        </div>

    </article>
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>  
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
        </div>
            
    </article>
            
     <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>  
        <div class="content">
            <p>Short content.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
            
    <article class="card">
        <header>
            <h2>A longer heading in this card</h2>
        </header>
        <div class="content">
            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                suggestion for reaching the North Pole by an aerostat.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
</div>

  );
}