<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">
    <img src="../assets/image/logo.jpg" alt="Logo" class="h-15 w-15">
    
    <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
  
        <li><a href ="/" class="hover:text-yellow-300">HOME</a></li>
        <li><a href ="/about" class="hover:text-yellow-300">ABOUT</a></li>
        <li><a href ="/service" class="hover:text-yellow-300">SERVICES</a></li>
        
        <li class="relative group">
          <a href ="#" class= "hover:text-yellow-300">GALLERY<span>🔽</span></a>
<ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50">
  <il><a href="#" class="block px-4 py-2 hover:bg-green-200">PHOTOS</a></il>
  <il><a href="#" class="block px-4 py-2 hover:bg-green-200">VIDEOS</a></il>
  </ul>
  </li>
        <li class="relative group">
        <li><a href ="#" class="hover:text-yellow-300">DESTINATION<span>🔽</span></a></li>     
        
<ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50">
  <il><a href="/northern" class="block px-4 py-2 hover:bg-green-700">NOTHREN PROVINCE</a></il>
  <il><a href="/southern" class="block px-4 py-2 hover:bg-green-700">SOUTHREN PROVINCE</a></il>
  <il><a href="/kigalicity" class="block px-4 py-2 hover:bg-green-700">KIGALI CITY PROVINCE</a></il>
  <il><a href="/eastern" class="block px-4 py-2 hover:bg-green-700">EASTERN PROVINCE</a></il>

  </ul>
  </li>
        <li><a href ="/contact" class="hover:text-yellow-300">CONCTACT</a></li>

        <li class="relative group">
        <li><a href ="#" class="hover:text-yellow-300">TRANSLET<span>🔽</span></a></li>   
        <ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50">
  <il><a href="/northern" class="block px-4 py-2 hover:bg-green-700">FRENCH</a></il>
  <il><a href="/southern" class="block px-4 py-2 hover:bg-green-700">KINYARWNDA</a></il>
  <il><a href="/kigalicity" class="block px-4 py-2 hover:bg-green-700">SPANISH</a></il>
  <il><a href="/eastern" class="block px-4 py-2 hover:bg-green-700">ITAILANA</a></il>

  </ul>
  </li>  


    </ul>
    </nav>
</template>