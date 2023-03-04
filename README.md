# contacts_book_api

-----------------------------------------------------------------------
## AUTH  :lock:
----------------------------------------------------------------------
`Authorization header: Bearer token(token)`
----------------------------------------------------------------------
### register :pencil2::pencil2::pencil2:
--------------------------------------------------------------------
`/api/auth/register`
-----------------------------------------------------------
* method:POST
* body: 
    ``` js
        {
        name:"userName",*
        email:"user@gmail.com",*
        password:password*
        } 
* response :   
  ``` js  
  {
    status: "success",
    code: 201,
    data: {
      name: string,
      email: string,
      subscription: string,
      avatarURL: string,
    },

    token,
  }
-------------------------------------  
### login  :key::key::key:
--------------------------------------------------------
`/api/auth/login`
-------------------------------------------------------
* method:POST
* body:
``` js 
      {
         email:"user@gmail.com",
         password:******
       }
```

* response :
``` js 
     {
    status: "success",
    code: 200,
    data: {
   name: string,
    email:string,
    subscription: string,
    avatarURL: string,
    },
    token,
  }
   
```
----------------------------------------------
### logout :x:
---------------------------------------------------
`/api/auth/logout`
--------------------------------------------------
* method:POST
* response : status(204)
---------------------------------------------------
## USER :smiley_cat:
-------------------------------------------------------
### current User :smiley_cat:
----------------------------------------------------------
`/api/user/current`
-------------------------------------------------
* method:GET
* response : 
``` js 
         {
    status: "success",
    code: 200,
    data: {     
        name,
        email,
        subscription,
    },
  }
```
----------------------------
## CONTACTS
-----------------------------------------------------
### add :pencil2:
---------------------------------------------------
`/api/contacts`
------------------------------------------------
* method:POST
* body:
``` js 
   { name:string*,
     email:string,
     phone:string* ,
     }
    
```

* response :
``` js 
     {
        status: "success",
        code: 201,
        data: { newContact },
      }
  
 ```
    
---------------------------------------
### delete contact :wastebasket:
-----------------------------------------
`/api/contacts/:contactId`
------------------------------------------
* method:DELETE
* response:
``` js
  {
    status: "success",
    code: 200,
    message: "contact deleted",
  }
```
---------------------------------------
### update contact :pencil2:
----------------------------------------
`/api/contacts/:contactId`
-------------------------------------------
* method:PUT
* body:
``` js
  { name:string*,
     email:string,
     phone:string* ,
   }
```
* response: 
``` js
 {
    status: "success",
    code: 200,
    data: { updatedContact },
  }
```
------------------------------------------
### update status isFavorite :green_heart:
------------------------------------------
`/api/contacts/:contactId/favorite`
-------------------------------------------
* method:PATCH
* body:
``` js
 { favorite:newStatus }
```
* response: 
``` js
 {
    status: "success",
    code: 200,
    data: { updateContact },
  }
```
------------------------------------------
### get all  :clipboard:
------------------------------------------------
`/api/contacts`  [All contacts]
--------------------------
`/api/contacts?favorite`  [All favorite contacts]
--------------------------------------------------
`/api/contacts?page=<pageNumber>&limit=<quantity per page>` [DEFAULT limit=100]
----------------------------------------------------
* method:GET
* response :
``` js
  {
      status: "success",
      code: 200,
      data: {
        result: contacts[],
      },
    }
```


 #### Example contact in response
 ---------------------------------------------------------------
 ``` js
    {                 
     name:string,
     email:string,
     phone:string
    }
        
```
---------------------------------------------------------------




