import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ex58Service } from '../ex58.service';
import Quill from 'quill';

@Component({
  selector: 'app-ex58-admin-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex58-admin-form.html',
  styleUrls: ['./ex58-admin-form.css'],
})
export class Ex58AdminForm implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('quillEditor') quillEditorRef!: ElementRef;

  isEdit = false;
  fashionId: string | null = null;
  errMessage = '';
  successMessage = '';
  isSaving = false;

  fashion = {
    style: '',
    fashion_subject: '',
    fashion_detail: '',
    fashion_image: ''
  };

  private quillInstance: any = null;

  readonly styles = ['Street Style', 'Trends', 'Designer', 'Casual', 'Formal', 'Vintage', 'Sport', 'Other'];

  constructor(
    private service: Ex58Service,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.fashionId = id;
        this.service.getFashionById(id).subscribe({
          next: (data) => {
            this.fashion.style = data.style || '';
            this.fashion.fashion_subject = data.fashion_subject || '';
            this.fashion.fashion_detail = data.fashion_detail || '';
            this.fashion.fashion_image = data.fashion_image || '';
            // Set Quill content after data loaded
            if (this.quillInstance) {
              this.quillInstance.root.innerHTML = this.fashion.fashion_detail;
            }
          },
          error: (err) => { this.errMessage = err.message; }
        });
      }
    });
  }

  ngAfterViewInit() {
    this.quillInstance = new Quill(this.quillEditorRef.nativeElement, {
      theme: 'snow',
      placeholder: 'Enter fashion details here...',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': [1, 2, 3, false] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['link', 'image'],
          ['clean']
        ]
      }
    });

    // If edit mode and data already loaded, set Quill content
    if (this.fashion.fashion_detail) {
      this.quillInstance.root.innerHTML = this.fashion.fashion_detail;
    }
  }

  ngOnDestroy() {
    this.quillInstance = null;
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      this.errMessage = 'Image size must be under 2MB.';
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.fashion.fashion_image = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  save() {
    // Get Quill HTML
    this.fashion.fashion_detail = this.quillInstance?.root.innerHTML || '';

    if (!this.fashion.style.trim() || !this.fashion.fashion_subject.trim()) {
      this.errMessage = 'Style and Title are required.';
      return;
    }

    this.isSaving = true;
    this.errMessage = '';

    const payload = { ...this.fashion };

    if (this.isEdit && this.fashionId) {
      this.service.updateFashion(this.fashionId, payload).subscribe({
        next: () => {
          this.successMessage = 'Updated successfully!';
          this.isSaving = false;
          setTimeout(() => this.router.navigate(['/ex58', 'admin']), 1200);
        },
        error: (err) => {
          this.errMessage = err.message;
          this.isSaving = false;
        }
      });
    } else {
      this.service.createFashion(payload).subscribe({
        next: () => {
          this.successMessage = 'Created successfully!';
          this.isSaving = false;
          setTimeout(() => this.router.navigate(['/ex58', 'admin']), 1200);
        },
        error: (err) => {
          this.errMessage = err.message;
          this.isSaving = false;
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/ex58', 'admin']);
  }
}
