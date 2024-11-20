import { NextResponse } from "next/server";
interface Book{
     id:number,
     title:string,
     author:string,
     image:string,
     available:boolean;
}
let books:Book[] = [
     {
          id:1,
          title:"fateh Nama Sindh",
          author: "Nabi bux Baloch",
          image:"/book1.jpg",
          available: true,
     },

     {
          id:2,
          title:"Sindh Saghar Qayam Pakistan",
          author: "Aitzaz Hassan",
          image:"/book2.jpg",
          available: true,
     },

     {
          id:3,
          title:"Sachal Sarmast's poetry",
          author: "Sachal Sarmast",
          image:"/book3.jpg",
          available: true,
     },
     {
          id:4,
          title:"The Case Of Sindh",
          author: "GM Syed",
          image:"/book4.jpg",
          available: true,
     },
     {
          id:5,
          title:"Sindh Spoken",
          author: "GM Syed",
          image:"/book5.jpg",
          available: true,
     },
     {
          id:6,
          title:"The Sindh Story",
          author: "K.R MALKANI",
          image:"/book6.jpg",
          available: true,
     },
]
//GET API
export const GET = async ()=>{
      return NextResponse.json(books,{status:200});
};

//POST API

export async function POST(req:Request){
     try{
          const newbook:Book = await req.json();
          books.push({...newbook,id:books.length + 1});
           return NextResponse.json({message:"Book Added successfully"},{status:201});
     } catch (error){
           return NextResponse.json({message:"Error adding Book",error},{status:500});
     }
}

//PUT API
export async function PUT(req:Request){
     try{
        const updatedBook:Book = await req.json();
        books = books.map((book)=>
          book.id === updatedBook.id ? {...book,...updatedBook}:book
     );
     return NextResponse.json({message:"Book updated successfully "},{status:200});
     }catch(error){
           return NextResponse.json({message:"Error updating Book."},{status:500});
     }
}

//DELETE API

export async function DELETE(req:Request){
     try {
          const { id } = await req.json();
          books = books.filter((book) => book.id !== id);
          return NextResponse.json({ message: "Book deleted successfully!" }, { status: 200 });
        } catch (error) {
          return NextResponse.json({ message: "Error deleting book!",error }, { status: 500 });
        }
}