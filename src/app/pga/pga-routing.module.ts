import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonComponent } from './components/season/season.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { PgaComponent } from './pga.component';

const routes: Routes = [{
  path: "pga",
  children: [
    {
      path: 'season',
      component: SeasonComponent
    },
    {
      path: 'tournament',
      component: TournamentComponent
    },
    {
      path: '',
      component: PgaComponent,
      pathMatch: 'full',
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgaRoutingModule { }
