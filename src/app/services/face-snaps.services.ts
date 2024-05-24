import { InjectDecorator, Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snaps.model";

@Injectable({
    providedIn : 'root'
})

export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [ 
        {
            id:1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit',
          imageUrl: 'assets/img/goku.png',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        },
        {
            id:2,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit',
          imageUrl: 'assets/img/goku.png',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        },
        {
            id:3,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit',
          imageUrl: 'assets/img/goku.png',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        }
      ];

      getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw new Error('facesnap not found !');
        }
        else{
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        
        if (faceSnap) {
          snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        } else {
          console.error('FaceSnap not found!');
        }
      }
      addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) : void{
        const faceSnap: FaceSnap = {
          ...formValue,
          createdDate: new Date(),
          snaps: 0,
          id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };
        this.faceSnaps.push(faceSnap);
      }
    }