import { Component } from '@angular/core';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mock-members-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {

  members = MEMBERS;
  selectedMember: Member | undefined;

  onSelectEmp(member:Member) {
    this.selectedMember = member;
  }
}
