import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  title!: string;
  desc!: string;
  img!: string;

  aMovie!: Movie;
  anAnime!: Movie;
  /*
  ngOnInit(): void {
    this.title = "Black Clover";
    this.desc = "Une description de Black Clover";
    //this.img = "https://vostfree.tv/uploads/posts/2020-05/1590699208_fullmetal-alchemist-vf.jpg";
    this.img = "https://vostfree.tv/uploads/posts/2018-01/1516739466_black_clover_vostfr.jpg";
  }// */
  //*
  ngOnInit() {
    this.aMovie = new Movie(
      "Full Metal Achemist",
      "Desc Full Metal Alchemist",
      "https://vostfree.tv/uploads/posts/2020-05/1590699208_fullmetal-alchemist-vf.jpg"
    );
    this.anAnime = new Movie(
      "Black Clover",
      "Desc Black Clover",
      "https://vostfree.tv/uploads/posts/2018-01/1516739466_black_clover_vostfr.jpg"
    );
  }// */
}
²
