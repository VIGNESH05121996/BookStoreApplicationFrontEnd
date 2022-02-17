import { Component, OnInit } from '@angular/core';
import { AddWishListService } from 'src/app/Services/WishListServices/add-wish-list.service';

@Component({
  selector: 'app-wish-list-component',
  templateUrl: './wish-list-component.component.html',
  styleUrls: ['./wish-list-component.component.scss']
})
export class WishListComponentComponent implements OnInit {
  token:any;
  wishList:any;
  countBooks:any;
  constructor(private wishListService:AddWishListService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllWishList();
  }
  getAllWishList() { 
    this.wishListService.getAllWishList(this.token).subscribe((response:any)=>{
      console.log(response)
      this.wishList=response.wishLists
      this.wishList.reverse()
      this.countBooks=response.wishLists.length
    })
    } 

    deleteWishList(book:any){
      console.log(book.wishListId)
      this.wishListService.deleteWishList(book.wishListId,this.token).subscribe((response:any)=>{
        console.log(response)
        if(response.success == true)
        {
          window.location.reload();
        }
      })
    }
}
