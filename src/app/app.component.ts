import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movies-project';
  aMovie!: Movie;
  anAnime!: Movie;

  ngOnInit() {//*
    this.aMovie = new Movie(
      "Full Metal Achemist",
      "Desc Full Metal Alchemist",
      "https://vostfree.tv/uploads/posts/2020-05/1590699208_fullmetal-alchemist-vf.jpg"
    );// */
    this.anAnime = new Movie(
      "Black Clover",
      "Desc Black CLover",
      "https://vostfree.tv/uploads/posts/2018-01/1516739466_black_clover_vostfr.jpg"
    );
  }
}
