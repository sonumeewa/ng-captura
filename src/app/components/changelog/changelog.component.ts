import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

class ChangelogItem {
  template: any;
  version: string;
}

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {

  //#region Templates
  @ViewChild("vNext") template;
  @ViewChild("vNext") templateNext;
  @ViewChild("v701") template701;
  @ViewChild("v700") template700;
  @ViewChild("v601") template601;
  @ViewChild("v600") template600;
  @ViewChild("v501") template501;
  @ViewChild("v500") template500;
  @ViewChild("v422") template422;
  @ViewChild("v421") template421;
  @ViewChild("v420") template420;
  @ViewChild("v410") template410;
  @ViewChild("v400") template400;
  @ViewChild("v350") template350;
  @ViewChild("v340") template340;
  @ViewChild("v330") template330;
  @ViewChild("v320") template320;
  @ViewChild("v310") template310;
  @ViewChild("v300") template300;
  @ViewChild("v200") template200;
  //#endregion

  list: ChangelogItem[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.initList();

    this.route.paramMap.subscribe(params => {
      let version = params.get('version');

      if (version) {
        if (version == "latest") {
          this.template = this.list[1].template;
        }
        else {
          let match = this.list.find(element => element.version == version);

          if (match) {
            this.template = match.template;
          }
        }
      }
    })
  }

  private initList() {
    this.list = [
      { version: "vNext", template: this.templateNext },
      { version: "v7.0.1", template: this.template701 },
      { version: "v7.0.0", template: this.template700 },
      { version: "v6.0.1", template: this.template601 },
      { version: "v6.0.0", template: this.template600 },
      { version: "v5.0.1", template: this.template501 },
      { version: "v5.0.0", template: this.template500 },
      { version: "v4.2.2", template: this.template422 },
      { version: "v4.2.1", template: this.template421 },
      { version: "v4.2.0", template: this.template420 },
      { version: "v4.1.0", template: this.template410 },
      { version: "v4.0.0", template: this.template400 },
      { version: "v3.5.0", template: this.template350 },
      { version: "v3.4.0", template: this.template340 },
      { version: "v3.3.0", template: this.template330 },
      { version: "v3.2.0", template: this.template320 },
      { version: "v3.1.0", template: this.template310 },
      { version: "v3.0.0", template: this.template300 },
      { version: "v2.0.0", template: this.template200 },
    ];
  }

  goTo(item: ChangelogItem) {
    this.router.navigate(['/changelog', item.version]);
  }
}
