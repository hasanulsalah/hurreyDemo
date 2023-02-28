import { AfterViewInit, Component, OnInit } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
@Component({
  selector: 'app-steponepage',
  templateUrl: './steponepage.component.html',
  styleUrls: ['./steponepage.component.scss'],
  animations: [
    trigger('displayState', [
      transition(':enter', [
        animate('1400ms ease-out', style({ transform: 'scale(1.8, 1.8)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'scale(0,0)' })),
      ]),
    ]),
    trigger('enlarge', [
      state(
        'large',
        style({
          transform: 'scale(1.2)',
        }),
      ),
      state(
        'normal',
        style({
          transform: 'scale(.9)',
        }),
      ),
    ]),
    trigger('bottomtoup', [
      transition(':enter', [
        style({ opacity: 0, transform: "translateY(50%)" }),
        animate(
          "1000ms ease-out",
          style({ opacity: 1, transform: 'translateY(0%)' })
        )
      ]),
    ]),
    trigger('lefttoright', [
      transition(':enter', [
        style({ opacity: 0, transform: "translateX(-100%)" }),
        animate(
          "1000ms ease-out",
          style({ opacity: 1, transform: 'translateX(0%)' })
        )
      ]),
    ]),
    trigger('righttoleft', [
      transition(':enter', [
        style({ opacity: 0, transform: "translateX(100%)" }),
        animate(
          "1000ms ease-out",
          style({ opacity: 1, transform: 'translateX(0%)' })
        )
      ]),
    ]),
  ],
})
export class SteponepageComponent implements OnInit, AfterViewInit {
  constructor() { }

  showHurreyLogo: boolean = true
  showFormInput: boolean = false
  nameInputValue: any
  selectedAvatarUrl: any
  currentPageIndex = 0
  numberPattern = /[1-4]/g
  avatars = [
    {
      id: '1',
      url: 'assets/images/av1.svg',
      isSelected: false,
    },
    {
      id: '2',
      url: 'assets/images/av2.svg',
      isSelected: false,
    },
    {
      id: '3',
      url: 'assets/images/av3.svg',
      isSelected: false,
    },
    {
      id: '4',
      url: 'assets/images/av4.svg',
      isSelected: false,
    },
    {
      id: '5',
      url: 'assets/images/av5.svg',
      isSelected: false,
    },
  ]

  ngOnInit(): void { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showFormInput = true
      this.showHurreyLogo = false
    }, 1500)
  }

  onSubmit(formValue: any) {
    this.nameInputValue = formValue.name
    this.showFormInput = false
    this.currentPageIndex++
  }

  avatarSelect(avatVal: any) {
    this.selectedAvatarUrl = avatVal.url
    this.avatars.map((item) => {
      item.isSelected = avatVal.id == item.id ? true : false
    })
  }

  goNext(whereTo?: any): any {
    if (whereTo == 'join') {
      this.currentPageIndex = 3
    } else if (whereTo == 'create') {
      this.currentPageIndex = 4
    } else {
      this.currentPageIndex++
    }
    console.log(this.currentPageIndex)
  }

  reducePageNoByOne(): any {
    if (this.currentPageIndex == 3 || this.currentPageIndex == 4) {
      this.currentPageIndex = 2
    } else {
      this.currentPageIndex--
    }
    if (this.currentPageIndex == 1 || this.currentPageIndex == 0) {
      this.showFormInput = true
    }
    console.log(this.currentPageIndex)
  }

  onlyNumberKey(evt: any, pageIndex?: number) {
    console.log(evt)
    if (pageIndex) {
      if (
        evt.key == '5' ||
        evt.key == '4' ||
        evt.key == '3' ||
        evt.key == '2' ||
        evt.key == '1'
      )
        return true
      return false
    } else {
      var ASCIICode = evt.which ? evt.which : evt.keyCode
      if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false
      return true
    }
  }
}
