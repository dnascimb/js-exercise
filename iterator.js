// A constructor that takes an array.
		function Iterator(args) {
			
			this.collection = args;
			this.cursor = 0;
		}

		// If the class can iterate the array further, it will return true.
		// If a call to next() will fail, it will return false.
		Iterator.prototype.hasNext = function() {
			if(this.cursor < this.collection.length-1)
				return true;
			else
				return false;
		};

		// This moves the iterator one spot and returns the new value.
		Iterator.prototype.next = function() {
			if(this.hasNext()) {
				this.cursor++;
				return this.collection[this.cursor];
			}
		};

		// This will return the current value pointed to by the iterator
		Iterator.prototype.current = function() {
			return this.collection[this.cursor];
		};

		// This function will return a function, this function when invoked will return 
		// the current value when the tag function was invoked. 
		Iterator.prototype.tag = function(value) {
			var location = value;
			var showTag = function() { return value;}
    		return showTag;
		};

		// This function will reverse the loaded array. After this function is invoked a 
		// call to current will return the same value it would have before the call.
		Iterator.prototype.reverse = function() {
			//this.collection.reverse(); no? :) ok
			var newArray = this.collection;

			for (var i = this.collection.length - 1; i >= 0; i--) {
				newArray.push(this.collection[i]);
				if(i == this.cursor)
					this.cursor = newArray.length-1;
			};
			this.collection = newArray;
		};

