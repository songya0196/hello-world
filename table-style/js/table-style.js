
        var tr = document.querySelectorAll('tr');
            for (var i = 0, len = tr.length; i < len; i++) {
                    tr[i].index = i;
                    tr[i].maxLength = tr.length - 1;
                    tr[i].addEventListener("mouseover" ,function () {
        	        this.classList.add('shadow');})
                    tr[i].addEventListener("mouseout" ,function () {
        	        this.classList.remove('shadow');})
            }
   