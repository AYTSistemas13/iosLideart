
function carga_lista_busqueda() {
	if (new Date < new Date('2022-01-13 00:00:00')){
		if (new Date(localStorage['fecha_lista']) < new Date('2022-01-17 09:30:00')) {
			//console.log("deberia cargar lista = "  )
			localStorage.removeItem('lista_busqueda')
			localStorage.removeItem('fecha_lista')
		}
	}
	if (localStorage.getItem('lista_busqueda') == null) {
		url = "https://lideart.com.mx/Automatizacion/listaJson.php"
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": url,
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"processData": false,
			"dataType": "JSON",
			"data": "{}"
		}

		$.ajax(settings).done(function(response) {
			//console.log(response)
			localStorage['lista_busqueda'] = JSON.stringify(response)
		});
	} else {
		fechaHoy = new Date()
		txtHoy   = fechaHoy.getFullYear()+"-"+(fechaHoy.getMonth()+1)+"-"+fechaHoy.getDate()+" "+fechaHoy.getHours()+":"+fechaHoy.getMinutes()+":00"
		if (localStorage.getItem('fecha_lista') == null) {
			//console.log("cargando lista 1 = ")
			localStorage.removeItem('lista_busqueda')
			localStorage['fecha_lista'] = txtHoy
			carga_lista_busqueda()
		} else {
			//console.log("cargando lista 2 = ")
			fechaHoy   = new Date(fechaHoy.getFullYear()+"-"+(fechaHoy.getMonth()+1)+"-"+fechaHoy.getDate())
			fechaLista = new Date(localStorage['fecha_lista'].split(' ')[0])
			if (fechaLista.getTime() < fechaHoy.getTime()) {
				localStorage['fecha_lista'] = txtHoy
				localStorage.removeItem('lista_busqueda')
				carga_lista_busqueda()
			}
		}
	}
}

carga_lista_busqueda()
options = {
	includeScore: true,
	shouldSort: true,
	findAllMatches: true,
	minMatchCharLength: 3,
	threshold: 0.45,		
	distance: 500,
	useExtendedSearch: true,
	keys: [
	{
		name: 'sku',
		weight: 0.5
	},
	{
		name: 'nombre',
		weight: 0.3
	},
	{
		name: 'tags',
		weight: 0.1
	},
	{
		name: 'marca',
		weight: 0.1
	}
	]
};
variables = [ {"threshold":0.45, "distance":500, "minMatchCharLength":3 },     {"threshold":0.40, "distance":450, "minMatchCharLength":1 }, {"threshold":0.35, "distance":400, "minMatchCharLength":1 }, {"threshold":0.30, "distance":500, "minMatchCharLength":1 } ]

function buscarUno() {
	//console.log("BUSCARUNO 123548")
	some = JSON.parse("{\""+window.location.search.replace(/\?/g,"").replace(/\&/g,"\",\"").replace(/\=/g,"\":\"")+"\"}")
	busqueda 	= some['s']
	pagina 		= (some['p'] != null) ? some['p']:"1";
	visibles 	= (some['v'] != null) ? some['v']:"12";
	comover 	= (some['view'] != null) ? some['view']:"grid";
	orden 		= (some['sort'] != null) ? some['sort']:0;
	document.getElementById('v-cuantos').value = visibles
	document.getElementById('ordenar-busqueda').value = orden
	document.getElementById('ordenar-busqueda').addEventListener("change",cambiaOrden)
	document.getElementById('filtro-doble').addEventListener("keyup",aplicaDobleFiltro,this)
	
	if (some['p'] == null || some['v'] == null || some['view'] == null || some['sort'] == null) {
		window.location.search+=((some['p'] != null) ? "":"&p=1")+((some['v'] != null) ? "":"&v=12")+((some['view'] != null) ? "":"&view=list")+((some['sort'] != null) ? "":"&sort=0")
	}

	pattern = busqueda
	total   = pattern.replace(/  /g,' ')
	asd     = pattern.replace(/  /g,' ').replace(/  /g,' ').replace(/  /g,' ').replace(/\+/g,' ').split(" ")
	nsearch = ""
	espacio = ""
	for (var i= 0; i< asd.length; i++) {
		if (asd[i] != "") {
			nsearch += espacio+""+asd[i]
			espacio = " "
		}
	}
	valor = pattern
	txt   = ""
	txtMarcas = ""
	txtCategorias = ""
	arrayCategoriasFijos = []
	arrayMarcas = []
	res = [] 
	if (valor != "") {
		nvalor = valor.replace(/  /g,' ').replace(/  /g,' ').replace(/\+/g,' ').split(' ')
		esSKU  = false;
		if (nvalor.length > 0) {
			options.minMatchCharLength = 1
			final = []
			if (nvalor.length == 1) {
				const regex = /([A-Z|a-z]{4}|[0-9]{4})-([0-9]{1})/gm;
				const str = nvalor[0];
				let m;

				while ((m = regex.exec(str)) !== null) {
					if (m.index === regex.lastIndex) {
						regex.lastIndex++;
					}
					m.forEach((match, groupIndex) => {
						esSKU =true
					});
				}
			}
			if (!esSKU) {
				for (var i = 0; i< nvalor.length; i++) {
					valor = nvalor[i]
					finalsku = []
					if (valor.length > 1) {
						finalsku.push({nombre:""+valor})
						finalsku.push({nombrebusqueda:""+valor})
						finalsku.push({tags:""+valor})
						finalsku.push({description:""+valor})
						leval = valor.replace(/as$/,'')
						leval = leval.replace(/es$/,'')
						leval = leval.replace(/os$/,'')
						if(leval != valor){
							finalsku.push({nombre:""+leval})
							finalsku.push({nombrebusqueda:""+leval})
							finalsku.push({tags:""+leval})
							finalsku.push({description:""+leval})
						}
						final.push({$or:finalsku})
					}

				}
				final  = {$and:final}
				nvalor = final;
				variables = [ 
				{"threshold":0.45, "distance":1000, "minMatchCharLength":1},
				]
				options.threshold = variables[0].threshold
				options.distance = variables[0].distance
				options.minMatchCharLength = variables[0].minMatchCharLength
				const fuse = new Fuse(lalistaBusqueda, options);
				valor =fuse.search(nvalor)
			} else {
				valor = nvalor[0]
				leval = valor.replace(/as$/,'')
				leval = leval.replace(/es$/,'')
				leval = leval.replace(/os$/,'')
				nvalor = valor+"$||'"+valor+"||"+leval+"$||'"+leval
				const fuse = new Fuse(lalistaBusqueda, options);
				valor =fuse.search(nvalor)
			}
		} else {
			options.minMatchCharLength = 4
			minLength = 4
			leval = valor.replace(/as$/,'')
			leval = leval.replace(/es$/,'')
			leval = leval.replace(/os$/,'')
			nvalor = valor+"$||'"+valor+"||"+leval+"$||'"+leval
			if (valor.length >= minLength) {
				const fuse = new Fuse(lalistaBusqueda, options);
				valor =fuse.search(nvalor)
			}
		}
	}
	cuantosResultados = 0;
	textoBuscado      = busqueda.replace(/\+/g,' '); 
	nuevas_options = {
		includeScore: true,
		shouldSort: true,
		findAllMatches: false,
		minMatchCharLength: 1,
		threshold: 0.20,		
		distance: 400,
		useExtendedSearch: true,
		isCaseSensitive: false
	};
	for (var i = 0; i < valor.length; i++) {
		const fuse = new Fuse(valor[i].item.nombrebusquedamin.split('1|2') , nuevas_options);
		le_valor   = fuse.search(textoBuscado)
		if (le_valor.length > 0) {
			valor[i].score=valor[i].score/1000
		}
		if (valor[i].item.tags.length > 0) {
			const fuse = new Fuse(valor[i].item.tags, nuevas_options);
			le_valor =fuse.search(textoBuscado)
			if (le_valor.length > 0) {
				valor[i].score=valor[i].score/(100*le_valor.length)
			}
		}
		if ((textoBuscado.toLowerCase() == 'cricut' || textoBuscado.toLowerCase() == 'cameo'  || textoBuscado.toLowerCase() == 'cameo4'  || textoBuscado.toLowerCase() == 'cameo 4' || textoBuscado.toLowerCase().includes('silhouette')) && valor[i].item.nombre.toLowerCase().includes('plotter')){
			valor[i].score=valor[i].score/100
		}
		
		if (textoBuscado.toLowerCase() == 'minc' && valor[i].item.nombre.toLowerCase().includes('laminadora')) {
			valor[i].score=valor[i].score/100
		}

		if (textoBuscado.toLowerCase() == 'cricut' && valor[i].item.nombre.toLowerCase().includes('silhouette')) {
			valor[i].score=valor[i].score+1
		}
		if (textoBuscado.toLowerCase().includes("maker") && valor[i].item.nombre.toLowerCase().includes('maker')) {
			valor[i].score=valor[i].score/100
			if (valor[i].item.nombre.toLowerCase().includes(textoBuscado.toLowerCase())) {
				valor[i].score=valor[i].score/100
			}
			if (valor[i].item.nombre.toLowerCase().includes('plotter')) {
				valor[i].score=valor[i].score/100
			}
		}
		if ((textoBuscado.toLowerCase() == 'silhouette' || textoBuscado.toLowerCase().includes('cameo')) && valor[i].item.nombre.toLowerCase().includes('cricut')) {
			valor[i].score=valor[i].score+1
		}
		if (valor[i].item['categoria'] == "EQUIPO"){
			valor[i].score+=1
		}
	}
	valor.sort((a,b)=> (a.score > b.score ? 1 : -1))
	losResultadosFijos = []
	losResultadosFijosValor = []
	for (var i = 0; i < valor.length; i++) {
		if (valor[i].score<.92) {
			if (valor[i].item.marca != '') {
				arrayMarcas.push(valor[i].item.marca)
			} else {
				valor[i].item.marca = 'Otra'
				arrayMarcas.push('Otra')
			}
			if (valor[i].item.categorias_detalles.length > 0) {
				for (var j = 0; j< valor[i].item.categorias_detalles.length > 0; j++ ) {
					arrayCategoriasFijos.push(valor[i].item.categorias_detalles[j].id_category)
				}
			} else {
				arrayCategoriasFijos.push('Otra')
			}
			losResultadosFijos.push(valor[i].item);
			losResultadosFijosValor.push(valor[i]);
		}
	}

	if (visibles == 1) {
		visibles = valor.length;
	}
	valor = losResultadosFijosValor;
	//console.log("2 valor = ")
	//console.log(valor)

	valor   = nuevoOrdenMundial(orden,valor)
	maxpage = parseInt(valor.length/visibles)+1
	if (pagina>maxpage) {
		window.location.search = window.location.search.replace('p='+pagina,'p='+maxpage)
	}
	txt      = ""
	cuenta   = 0
	txtlist  = ''
	for (var i= ((pagina-1)*visibles); i< (pagina*visibles); i++) {
		if (i < valor.length) {
			url    = valor[i].item.link
			image  = valor[i].item.image_link.replace("-small_default","")
			nombre = valor[i].item.nombre
			price  = parseFloat(valor[i].item.precio) * 1.16
			precio = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(valor[i].item.precio)*1.16).toFixed(2)))
			descuento = parseFloat(valor[i].item.reduction)
			precioDescuento = price * descuento
			precioDescuento = price - precioDescuento
			precioDescuento = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(precioDescuento)).toFixed(2)))

			txtlist += "<li class='product_item col-xs-12 col-sm-6 col-md-4 col-lg-2'>";
			txtlist += '<article class="product-miniature js-product-miniature">'
			txtlist += '<div class="thumbnail-container">'
			txtlist += '<div class="dd-product-image">'
			txtlist += '<a  href="/'+url+'" class="thumbnail product-thumbnail" style="min-height:272px;">'
			txtlist += '<img class="ddproduct-img1" src="https://lideart.com.mx/'+image+'" alt="'+nombre+'" style="top: 50%;position: absolute;left: 0;transform: translate(0%, -50%);">'
			txtlist += '</a>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '<div class="product-description">'
			txtlist += '<h3 class="h3 product-title" itemprop="name">'
			txtlist += '<a href="/'+url+'">'+nombre+'</a>'
			txtlist += '</h3>'
			txtlist += '<div class="product-price-and-shipping">'
			txtlist += '<span class="sr-only">Precio</span>'
			if (descuento > 0) {
				txtlist += '<span itemprop="price" class="price" style="text-decoration: line-through; color:#1BC0E0">'+precio+'</span><br>'
				txtlist += '<span itemprop="price" class="price" style="color:#1BC0E0; font-size:18px; font-weight:bold">'+precioDescuento+'</span>'
			} else {
				txtlist += '<br><span itemprop="price" class="price" style="color:#1BC0E0; font-size:18px; font-weight:bold">'+precio+'</span>'
			}
			txtlist += '</div>'
			txtlist += '<div class="product-detail" itemprop="description">'
			txtlist += '<h1 style="text-align: center; color: #259bbc;">'
			txtlist += '<span style="text-decoration: underline;">'
			txtlist += '<em>'
			txtlist += '<strong>'+nombre+'</strong>'
			txtlist += '</em>'
			txtlist += '</span>'
			txtlist += '</h1>'
			txtlist += '<div style="text-align: start;">'
			txtlist += '<img src="https://lideart.com.mx/img_desc/0540-0240-0052/LOGO_COLOR_b6d217a4-acfa-43d2-bcea-8e0208be091e_240x240.png" alt="" style="float: none;">&nbsp;'
			txtlist += '</div>'
			txtlist += '<p>'
			txtlist += '</p>'
			txtlist += '</div>'
			txtlist += '</div>	'
			txtlist += '<div class="highlighted-informations no-variants">'
			txtlist += '<div class="product-actions">'
			txtlist += '<div class="buttons-actions_align">'
			txtlist += '<a href="/'+url+'" title="Mostrar" class="view"></a>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '</article>'
			txtlist += '</li>'
			cuenta++
		}
	}

	txtPaginado  = '<div class="col-md-7-5" id="el_paginado_busqueda">'
	txtPaginado += '<ul class="page-list clearfix text-xs-center">'

	pagina = parseInt(pagina)
	if (visibles != valor.length) {
		if (pagina > 1) {
			txtPaginado += '<li><a rel="prev" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina-1)))+'" class="previous "><i class="st fa-angle-double-left"></i></a></li>'
			if ((pagina-1)>1) {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1...</a></li>'
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina-1)))+'" class="">'+(pagina-1)+'</a></li>'
				txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+(pagina)+'</a></li>'
			} else {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1</a></li>'
				txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+(pagina)+'</a></li>'

			}
		} else if(pagina == 1) {
			txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+pagina+'</a></li>'
			if (visibles*2 < valor.length) {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'
				if (visibles*3 < valor.length) {
					txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+2)))+'" class="">'+(pagina+2)+'</a></li>'
				}
			}

		}

		if (pagina < maxpage) {
			if ((pagina+1) < maxpage) {
				if (pagina != 1) {
					txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'
				}
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+maxpage))+'" class="">...'+maxpage+'</a></li>'
			} else {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'

			}
			txtPaginado += '<li><a rel="next" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="next "><i class="st fa-angle-double-right"></i></a></li>'
		}
	} else {
		txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1</a></li>'
	}
	txtPaginado += '</ul>'
	txtPaginado += '</div>'
	document.getElementById('resBusqueda').innerHTML = txtlist
	if (!document.getElementById('el_paginado_busqueda')) {
		document.getElementById('totResBusqueda').parentElement.innerHTML += txtPaginado
	} else {
		document.getElementById('el_paginado_busqueda').outerHTML = txtPaginado
	}
	document.getElementById('totResBusqueda').innerText  = "Mostrando "+((pagina-1)*visibles)+" - "+((pagina*visibles <= valor.length) ? pagina*visibles:valor.length)+" de "+valor.length+" articulo(s)."
	document.getElementById('totResBusqueda2').innerText = "Mostrando "+((pagina-1)*visibles)+" - "+((pagina*visibles <= valor.length) ? pagina*visibles:valor.length)+" de "+valor.length+" articulo(s)."
	document.getElementsByClassName('heading-cms')[0].innerText = "Busqueda ("+valor.length+" Resultados)."
	document.getElementById('fondo-cargaInicial').className = 'fondo-carga inactivo'
	if (document.getElementById('list').className == "selected") {
		document.getElementById('list').children[0].click()
	}
	// ejemplo2Fijos(arrayCategoriasFijos)
}



function aplicaDobleFiltro(entrada) {
	nKey =  entrada.key
	if (nKey != "Shift"  && nKey != "Control"  && nKey != "Alt"  && nKey != " ") {
		nBusqueda = document.getElementById('filtro-doble').value
		buscarTres(nBusqueda)
	}
}

function buscarTres(busqueda) {
	busquedaPorMarcasFijo()
	return 
	some = JSON.parse("{\""+window.location.search.replace(/\?/g,"").replace(/\&/g,"\",\"").replace(/\=/g,"\":\"")+"\"}")
	pagina 	 = (some['p'] != null) ? some['p']:"1";
	visibles = (some['v'] != null) ? some['v']:"12";
	comover  = (some['view'] != null) ? some['view']:"grid";
	orden 	 = (some['sort'] != null) ? some['sort']:0;
	pattern  = busqueda
	total    = pattern.replace(/  /g,' ')
	asd      = pattern.replace(/  /g,' ').replace(/  /g,' ').replace(/  /g,' ').split(" ")
	nsearch  = ""
	espacio  = ""
	for (var i= 0; i< asd.length; i++) {
		if (asd[i] != "") {
			nsearch += espacio+""+asd[i]
			espacio  = " "
		}
	}
	valor           = pattern
	txt             = ""
	txtMarcas       = ""
	txtCategorias   = ""
	arrayCategorias = []
	arrayMarcas     = []
	res             = [] 
	if (valor != "") {
		nvalor = valor.replace(/  /g,' ').replace(/  /g,' ').split(' ')
		esSKU  = false;
		if (nvalor.length > 0) {
			options.minMatchCharLength = 1
			final = []
			if (nvalor.length == 1) {
				const regex = /([A-Z|a-z]{4}|[0-9]{4})-([0-9]{1})/gm;
				const str   = nvalor[0];
				let m;

				while ((m = regex.exec(str)) !== null) {
					if (m.index === regex.lastIndex) {
						regex.lastIndex++;
					}
					m.forEach((match, groupIndex) => {
						esSKU =true
					});
				}
			}
			if (!esSKU) {
				for (var i = 0; i< nvalor.length; i++) {
					valor    = nvalor[i]
					finalsku = []
					if (valor.length > 1) {
						finalsku.push({nombre:""+valor})
						finalsku.push({nombrebusqueda:""+valor})
						finalsku.push({tags:""+valor})
						finalsku.push({description:""+valor})
						leval = valor.replace(/as$/,'')
						leval = leval.replace(/es$/,'')
						leval = leval.replace(/os$/,'')
						if(leval != valor){
							finalsku.push({nombre:""+leval})
							finalsku.push({nombrebusqueda:""+leval})
							finalsku.push({tags:""+leval})
							finalsku.push({description:""+leval})
						}
						final.push({$or:finalsku})
					}
				}
				final     = {$and:final}
				nvalor    = final;
				variables = [ 
				{"threshold":0.45, "distance":1000, "minMatchCharLength":1},
				]
				options.threshold = variables[0].threshold
				options.distance  = variables[0].distance
				options.minMatchCharLength = variables[0].minMatchCharLength
				const fuse = new Fuse(lalistaBusqueda, options);
				valor      = fuse.search(nvalor)
			} else {
				valor  = nvalor[0]
				leval  = valor.replace(/as$/,'')
				leval  = leval.replace(/es$/,'')
				leval  = leval.replace(/os$/,'')
				nvalor = valor+"$||'"+valor+"||"+leval+"$||'"+leval
				const fuse = new Fuse(lalistaBusqueda, options);
				valor = fuse.search(nvalor)
			}
		} else {
			options.minMatchCharLength = 4
			minLength = 4
			leval  = valor.replace(/as$/,'')
			leval  = leval.replace(/es$/,'')
			leval  = leval.replace(/os$/,'')
			nvalor = valor+"$||'"+valor+"||"+leval+"$||'"+leval
			if (valor.length >= minLength) {
				const fuse = new Fuse(lalistaBusqueda, options);
				valor = fuse.search(nvalor)
			}
		}
	}
	textoBuscado = document.getElementById('filtro-doble').value; 
	textoBuscado = textoBuscado.replace(/\+/g,' '); 
	for (var i = 0; i < valor.length; i++) {
		if ((textoBuscado.toLowerCase() == 'cricut' || textoBuscado.toLowerCase() == 'cameo'  || textoBuscado.toLowerCase() == 'cameo4'  || textoBuscado.toLowerCase() == 'cameo 4' || textoBuscado.toLowerCase().includes('silhouette')) && valor[i].item.nombre.toLowerCase().includes('plotter')) {
			valor[i].score=valor[i].score/100
		}
		
		if (textoBuscado.toLowerCase() == 'minc' && valor[i].item.nombre.toLowerCase().includes('laminadora')) {
			valor[i].score=valor[i].score/100
		}

		if (textoBuscado.toLowerCase() == 'cricut' && valor[i].item.nombre.toLowerCase().includes('silhouette')) {
			valor[i].score=valor[i].score+1
		}
		if (textoBuscado.toLowerCase().includes("maker") && valor[i].item.nombre.toLowerCase().includes('maker')) {
			valor[i].score=valor[i].score/100
			if (valor[i].item.nombre.toLowerCase().includes(textoBuscado.toLowerCase())) {
				valor[i].score=valor[i].score/100
			}
			if (valor[i].item.nombre.toLowerCase().includes('plotter')) {
				valor[i].score=valor[i].score/100
			}
		}
		if ((textoBuscado.toLowerCase() == 'silhouette' || textoBuscado.toLowerCase().includes('cameo')) && valor[i].item.nombre.toLowerCase().includes('cricut')) {
			valor[i].score=valor[i].score+1
		}
		if (valor[i].item['categoria'] == "EQUIPO") {
			valor[i].score+=1
		}
	}
	valor.sort((a,b)=> (a.score > b.score ? 1 : -1))
	losResultados      = []
	losResultadosValor = []
	for (var i = 0; i < valor.length; i++) {
		if (valor[i].score<.92) {
			if (valor[i].item.marca != '') {
				arrayMarcas.push(valor[i].item.marca)
			} else {
				valor[i].item.marca = 'Otra'
				arrayMarcas.push('Otra')
			}
			if (valor[i].item.categorias_detalles.length > 0) {
				for (var j = 0; j< valor[i].item.categorias_detalles.length > 0; j++) {
					arrayCategorias.push(valor[i].item.categorias_detalles[j].id_category)
				}
			} else {
				arrayCategorias.push('Otra')
			}
			losResultados.push(valor[i].item);
			losResultadosValor.push(valor[i]);
		}
	}

	//console.log("b) 1 valor = ")
	//console.log(valor)
	valor = losResultadosValor;
	//console.log("2 valor = ")
	//console.log(valor)
	n_valor = nuevoOrdenMundial(orden,valor)
	maxpage = parseInt(n_valor.length/visibles)+1
	if (pagina>maxpage) {
		window.location.search = window.location.search.replace('p='+pagina,'p='+maxpage)
	}
	txt     = ""
	cuenta  = 0
	txtlist = ''
	for (var i = ((pagina-1)*visibles); i< (pagina*visibles); i++) {
		if (i < n_valor.length) {
			url = n_valor[i].item.link
			image  = n_valor[i].item.image_link.replace("-small_default","")
			nombre = n_valor[i].item.nombre
			precio = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(n_valor[i].item.precio)*1.16).toFixed(2)))
			txtlist += '<li class="product_item col-xs-12 col-sm-6 col-md-4 col-lg-2">'
			txtlist += '<article class="product-miniature js-product-miniature">'
			txtlist += '<div class="thumbnail-container">'
			txtlist += '<div class="dd-product-image">'
			txtlist += '<a  href="/'+url+'" class="thumbnail product-thumbnail" style="min-height:272px;">'
			txtlist += '<img class="ddproduct-img1" src="https://lideart.com.mx/'+image+'" alt="'+nombre+'" style="top: 50%;position: absolute;left: 0;transform: translate(0%, -50%);">'
			txtlist += '</a>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '<div class="product-description">'
			txtlist += '<h3 class="h3 product-title" itemprop="name">'
			txtlist += '<a href="/'+url+'">'+nombre+'</a>'
			txtlist += '</h3>'
			txtlist += '<div class="product-price-and-shipping">'
			txtlist += '<span class="sr-only">Precio</span>'
			txtlist += '<span itemprop="price" class="price">'+precio+'</span>'
			txtlist += '</div>'
			txtlist += '<div class="product-detail" itemprop="description">'
			txtlist += '<h1 style="text-align: center; color: #259bbc;">'
			txtlist += '<span style="text-decoration: underline;">'
			txtlist += '<em>'
			txtlist += '<strong>'+nombre+'</strong>'
			txtlist += '</em>'
			txtlist += '</span>'
			txtlist += '</h1>'
			txtlist += '<div style="text-align: start;">'
			txtlist += '<img src="https://lideart.com.mx/img_desc/0540-0240-0052/LOGO_COLOR_b6d217a4-acfa-43d2-bcea-8e0208be091e_240x240.png" alt="" style="float: none;">&nbsp;'
			txtlist += '</div>'
			txtlist += '<p>'
			txtlist += '</p>'
			txtlist += '</div>'
			txtlist += '</div>	'
			txtlist += '<div class="highlighted-informations no-variants">'
			txtlist += '<div class="product-actions">'
			txtlist += '<div class="buttons-actions_align">'
			txtlist += '<a href="/'+url+'" title="Mostrar" class="view"></a>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '</article>'
			txtlist += '</li>'
			cuenta++
		}
	}

	if (document.getElementById('el_paginado_busqueda')) {
		txtPaginado = '<ul class="page-list clearfix text-xs-center">'
	} else {
		txtPaginado  = '<div class="col-md-7-5" id="el_paginado_busqueda">'
		txtPaginado += '<ul class="page-list clearfix text-xs-center">'
	}

	pagina = parseInt(pagina)
	if (visibles != n_valor.length) {
		if (pagina > 1) {
			txtPaginado += '<li><a rel="prev" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina-1)))+'" class="previous "><i class="st fa-angle-double-left"></i></a></li>'
			if ((pagina-1)>1) {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1...</a></li>'
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina-1)))+'" class="">'+(pagina-1)+'</a></li>'
				txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+(pagina)+'</a></li>'
			} else {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1</a></li>'
				txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+(pagina)+'</a></li>'
			}
		} else if(pagina == 1) {
			txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+pagina+'</a></li>'
			if(visibles*2 < n_valor.length){
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'
				if(visibles*3 < n_valor.length){
					txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+2)))+'" class="">'+(pagina+2)+'</a></li>'
				}
			}
		}

		if (pagina < maxpage) {
			if ((pagina+1) < maxpage) {
				if (pagina != 1) {
					txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'
				}
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+maxpage))+'" class="">...'+maxpage+'</a></li>'
			} else {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'

			}
			txtPaginado += '<li><a rel="next" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="next "><i class="st fa-angle-double-right"></i></a></li>'
		}
	} else {
		txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1</a></li>'
	}
	txtPaginado += '</ul>'
	if (!document.getElementById('el_paginado_busqueda')) {
		txtPaginado += '</div>'
		document.getElementById('totResBusqueda').parentElement.innerHTML += txtPaginado
	} else {
		document.getElementById('el_paginado_busqueda').innerHTML = txtPaginado
	}
	document.getElementById('resBusqueda').innerHTML = txtlist
	document.getElementById('totResBusqueda').innerText  = "Mostrando "+((pagina-1)*visibles)+" - "+((pagina*visibles <= n_valor.length) ? pagina*visibles:n_valor.length)+" de "+n_valor.length+" articulo(s)."
	document.getElementById('totResBusqueda2').innerText = "Mostrando "+((pagina-1)*visibles)+" - "+((pagina*visibles <= n_valor.length) ? pagina*visibles:n_valor.length)+" de "+n_valor.length+" articulo(s)."
	document.getElementsByClassName('heading-cms')[0].innerText = "Busqueda ("+n_valor.length+" Resultados)."
	document.getElementById('fondo-cargaInicial').className = 'fondo-carga inactivo'
	if (document.getElementById('list').className == "selected") {
		document.getElementById('list').children[0].click()
	}
}


if (document.getElementById('all_product_list_grid')) {
	buscarProductosGeneral('')
}

idc = 0


options = {
	includeScore: true,
	shouldSort: true,
	findAllMatches: false,
	minMatchCharLength: 3,
	threshold: 0.45,		
	distance: 1000,
	useExtendedSearch: true,
	isCaseSensitive: false,
	keys: [
	{
		name: 'sku',
		weight: 0.5
	},
	{
		name: 'nombre',
		weight: 0.5
	},
	{
		name: 'nombrebusqueda',
		weight: 0.3
	},
	{
		name: 'tags',
		weight: 0.025
	},
	{
		name: 'marca',
		weight: 0.00001
	}
	]
};

optionsTags = {
	includeScore: true,
	shouldSort: true,
	findAllMatches: false,
	minMatchCharLength: 1,
	threshold: 0.45,		
	distance: 1000,
	useExtendedSearch: true,
	isCaseSensitive: false,
	keys: [
	{
		name: 'tag',
		weight: 1
	}
	]
};
optionsMarca = {
	includeScore: true,
	shouldSort: true,
	findAllMatches: false,
	minMatchCharLength: 1,
	threshold: 0.95,		
	distance: 10000,
	useExtendedSearch: true,
	isCaseSensitive: false,
	keys: [
	{
		name: 'marca',
		weight: 1
	}
	]
};

var elcorrecaminos = setInterval(function(){
	buscaleprevio(document.getElementById('pabuscar'))
},1000)
clearInterval(elcorrecaminos);

function buscaleprevio(variable) {
	//console.log("buscaleprevio = ------------------------"  )
	clearInterval(elcorrecaminos);
	buscaleMarca(variable)
	elcorrecaminos = setInterval(function(){
		buscale(variable)
	}
	,1000)
}
losTags = []
laListaDeMarcas = []
function completaBusqueda(valor, indice) {
	palabra = valor.innerText
	document.getElementById('pabuscar').value = palabra
	buscaleprevio(document.getElementById('pabuscar'), indice)
}

function buscaleTag(variable) {
	//console.log("buscaleTag = ------------------------"  )
	pattern  = variable.value
	pattern  = pattern.replace(/  /g,' ').replace(/  /g,' ').replace(/  /g,' ').replace(/  /g,' ').toLowerCase()
	valor    = pattern
	finalsku = []
	final    = []
	finalsku.push({tag:""+valor})
	final.push({$or:finalsku})
	final = {$and:final}
	const fuse = new Fuse(losTags, optionsTags);
	valorTags  = fuse.search(final)
	txtTagTag  = ""
	for (var it = 0 ;it<valorTags.length;it++) {
		if (it<10) {
			if (valorTags[it].score < 0.75) {
				txtTagTag +="<div onclick=\"completaBusqueda(this,'tag')\">"+valorTags[it].item.tag+"</div>"
			}
		} else {
			it = valorTags.length +100
		}
	}
	if (txtTagTag != "") {
		document.getElementById('lasPistas').innerHTML += txtTagTag;
	}
	if (document.getElementById('lasPistas').childElementCount > 0) {
		document.getElementById('contResultadosPistas').style.display = 'block'
	}
}

function buscaleMarca(variable) {
	//console.log("buscaleMarca = ------------------------"  )
	document.getElementById('contResultadosPistas').style.display = 'none'
	pattern  = variable.value
	pattern  = pattern.replace(/  /g,' ').replace(/  /g,' ').replace(/  /g,' ').replace(/  /g,' ').toLowerCase()
	valor    = pattern
	finalsku = []
	final    = []
	finalsku.push({marca:""+valor})
	final.push({$or:finalsku})
	final = {$and:final}
	const fuse  = new Fuse(laListaDeMarcas, optionsMarca);
	valorTags   = fuse.search(final)
	txtTagMarca = ""
	for (var it =0 ;it<valorTags.length;it++) {
		if (it<10) {
			if (valorTags[it].score < 0.75) {
				txtTagMarca +="<div onclick=\"completaBusqueda(this,'marca')\">"+valorTags[it].item.marca+"</div>"
			}
		} else {
			it = valorTags.length +100
		}
	}
	
	document.getElementById('lasPistas').innerHTML = "";
	if (txtTagMarca != "") {
		document.getElementById('lasPistas').innerHTML += txtTagMarca;
	}
	buscaleTag(variable)
}

function buscale(variable) {
	//console.log("buscale = ------------------------"  )
	clearInterval(elcorrecaminos);
	pattern = variable.value
	if (pattern == "") {
		//console.log("qdasd = " )
		document.getElementById("axbody").innerText =""
		document.getElementById("axbody").style.display ="none"
		document.getElementById("cuerpoBusqueda").style.display ="none"
		return
	}
	total   = pattern.replace(/  /g,' ')
	asd     = pattern.replace(/  /g,' ').replace(/  /g,' ').replace(/  /g,' ').split(" ")
	nsearch = ""
	espacio = ""
	for (var i= 0; i< asd.length; i++) {
		if(asd[i] != ""){
			nsearch += espacio+""+asd[i]
			espacio  = " "
		}
	}
	valor           = pattern
	txt             = ""
	txtMarcas       = ""
	txtCategorias   = ""
	arrayCategorias = []
	arrayMarcas     = []
	res             = [] 
	if (valor != "") {
		nvalor = valor.replace(/  /g,' ').replace(/  /g,' ').split(' ')
		esSKU  = false;
		if (nvalor.length > 0) {
			options.minMatchCharLength = 1
			final = []
			if (nvalor.length == 1) {
				const regex = /([A-Z|a-z]{4}|[0-9]{4})-([0-9]{1})/gm;
				const str = nvalor[0];
				let m;

				while ((m = regex.exec(str)) !== null) {
					if (m.index === regex.lastIndex) {
						regex.lastIndex++;
					}
					m.forEach((match, groupIndex) => {
						esSKU =true
					});
				}
			}
			if (!esSKU) {
				for (var i = 0; i< nvalor.length; i++) {
					valor    = nvalor[i]
					finalsku = []
					if (valor.length > 1) {
						finalsku.push({nombre:""+valor})
						finalsku.push({nombrebusqueda:""+valor})
						finalsku.push({tags:""+valor})
						finalsku.push({description:""+valor})
						leval = valor.replace(/as$/,'')
						leval = leval.replace(/es$/,'')
						leval = leval.replace(/os$/,'')
						if (leval != valor) {
							finalsku.push({nombre:""+leval})
							finalsku.push({nombrebusqueda:""+leval})
							finalsku.push({tags:""+leval})
							finalsku.push({description:""+leval})
						}
						final.push({$or:finalsku})
					}

				}
				final     = {$and:final}
				nvalor    = final;
				variables = [ 
				{"threshold":0.45, "distance":1000, "minMatchCharLength":1},
				]
				options.threshold = variables[0].threshold
				options.distance = variables[0].distance
				options.minMatchCharLength = variables[0].minMatchCharLength
				const fuse = new Fuse(lalistaBusqueda, options);
				valor = fuse.search(nvalor)
			} else {
				valor  = nvalor[0]
				leval  = valor.replace(/as$/,'')
				leval  = leval.replace(/es$/,'')
				leval  = leval.replace(/os$/,'')
				nvalor = valor+"$||'"+valor+"||"+leval+"$||'"+leval
				const fuse = new Fuse(lalistaBusqueda, options);
				valor = fuse.search(nvalor)
			}
		} else {
			options.minMatchCharLength = 4
			minLength = 4
			leval  = valor.replace(/as$/,'')
			leval  = leval.replace(/es$/,'')
			leval  = leval.replace(/os$/,'')
			nvalor = valor+"$||'"+valor+"||"+leval+"$||'"+leval
			if (valor.length >= minLength) {
				const fuse = new Fuse(lalistaBusqueda, options);
				valor = fuse.search(nvalor)
			}
		}
	}
	textoBuscado = variable.value; 
	textoBuscado = textoBuscado.replace(/\+/g,' '); 
	nuevas_options = {
		includeScore: true,
		shouldSort: true,
		findAllMatches: false,
		minMatchCharLength: 1,
		threshold: 0.20,		
		distance: 400,
		useExtendedSearch: true,
		isCaseSensitive: false
	};
	for (var i = 0; i < valor.length; i++) {
		const fuse = new Fuse(valor[i].item.nombrebusquedamin.split('1|2') , nuevas_options);
		le_valor = fuse.search(textoBuscado)
		if (le_valor.length > 0) {
			valor[i].score = valor[i].score/1000
		}
		if (valor[i].item.tags.length > 0) {
			const fuse = new Fuse(valor[i].item.tags, nuevas_options);
			le_valor   = fuse.search(textoBuscado)
			if (le_valor.length > 0) {
				valor[i].score = valor[i].score/(100*le_valor.length)
			}
		}
		if ((textoBuscado.toLowerCase() == 'cricut' || textoBuscado.toLowerCase() == 'cameo'  || textoBuscado.toLowerCase() == 'cameo4'  || textoBuscado.toLowerCase() == 'cameo 4' || textoBuscado.toLowerCase().includes('silhouette')) && valor[i].item.nombre.toLowerCase().includes('plotter')){
			valor[i].score=valor[i].score/100
		}
		
		if (textoBuscado.toLowerCase() == 'minc' && valor[i].item.nombre.toLowerCase().includes('laminadora') ){
			valor[i].score=valor[i].score/100
		}

		if (textoBuscado.toLowerCase() == 'cricut' && valor[i].item.nombre.toLowerCase().includes('silhouette')){
			valor[i].score=valor[i].score+1
		}
		if (textoBuscado.toLowerCase().includes("maker") && valor[i].item.nombre.toLowerCase().includes('maker')){
			valor[i].score=valor[i].score/100
			if (valor[i].item.nombre.toLowerCase().includes(textoBuscado.toLowerCase())) {
				valor[i].score=valor[i].score/100
			}
			if (valor[i].item.nombre.toLowerCase().includes('plotter')) {
				valor[i].score=valor[i].score/100
			}
		}
		if ((textoBuscado.toLowerCase() == 'silhouette' || textoBuscado.toLowerCase().includes('cameo')) && valor[i].item.nombre.toLowerCase().includes('cricut')){
			valor[i].score=valor[i].score+1
		}
		if(valor[i].item['categoria'] == "EQUIPO"){
			valor[i].score+=1
		}
	}
	valor.sort((a,b)=> (a.score > b.score ? 1 : -1))
	losResultados = []
	losResultadosValor = []
	cuantosResultados = 0;
	for (var i = 0; i < valor.length; i++) {
		if (valor[i].score<.92) {
			cuantosResultados++
		}
	}
	for (var i = 0; i < valor.length; i++) {
		if (valor[i].score<.92) {
			if (valor[i].item.marca != '') {
				arrayMarcas.push(valor[i].item.marca)
			} else {
				valor[i].item.marca = 'Otra'
				arrayMarcas.push('Otra')
			}
			if (valor[i].item.categorias_detalles.length > 0 ) {
				for (var j = 0; j< valor[i].item.categorias_detalles.length > 0; j++) {
					arrayCategorias.push(valor[i].item.categorias_detalles[j].id_category)
				}
			} else {
				arrayCategorias.push('Otra')
			}
			act       = valor[i].item.active
			bg        = (act!=1?"class='bg-danger text-light m-0'":"class='m-0'")
			inc       = (act!=1?"(PRODUCTO-DESACTIVADO)":"")
			price     = parseFloat(valor[i].item.precio) * 1.16
			precio    = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(valor[i].item.precio)*1.16).toFixed(2)))
			descuento = parseFloat(valor[i].item.reduction)
			precioDescuento = price * descuento
			precioDescuento = price - precioDescuento
			precioDescuento = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(precioDescuento)).toFixed(2)))
			txt += "<li class='ui-menu-item' role='presentation'>";
			txt += "<a id='ui-id-2' class='ui-corner-all' tabindex='-1' onclick='llevame("+valor[i].item.id_product+",\""+valor[i].item.sku[0]+"\")'>";
			txt += "<span class='search_lewa'>";
			txt += "<img src='https://lideart.com.mx/"+valor[i].item.image_link+"'>";
			txt += "</span>";
			txt += "<span class='search_prawa'>";
			txt += "<span class='search_marka'>"+valor[i].item.marca+"</span>";
			txt += "<span class='search_nazwa'>"+valor[i].item.nombre+"</span>";
			if (descuento > 0) {
				txt += "<span class='search_cena' style='text-decoration: line-through'>"+precio+"</span>";
				txt += "<span class='search_cena'>"+precioDescuento+"</span>";
			} else {
				txt += "<span class='search_cena'>"+precio+"</span>";
			}
			txt += "</span>";
			txt += "<span class='clearfix'></span>";
			txt += "</a>";
			txt += "</li>";
			losResultados.push(valor[i].item);
			losResultadosValor.push(valor[i]);
		}

	}
	localStorage.setItem("productos_buscados", JSON.stringify(losResultados));
	arrayMarcas = [new Set(arrayMarcas)][0]
	arrayMarcas.forEach(element => txtMarcas += "<div style='position:relative; border-bottom:1px solid #989898;' id='"+element+"'>"+element+"<input type='checkbox' onclick='BusquedaPorMarcas()' name='marcas' class='marcas' value='"+element+"'></div>")
	arrayCategorias = [new Set(arrayCategorias)][0]
	arrayCategorias.forEach(element => mueveCategorias(element))
	if (txt != "") {
		document.getElementById("axbody").innerHTML =txt
		document.getElementById("axbody").style.maxHeight ="560px"
		document.getElementById("axbody").style.minHeight ="560px"
		document.getElementById("axbody").style.overflowY ="scroll"
		document.getElementById("axbody").style.display ="block"
		document.getElementById("axbody").style.width ="100%"
		document.getElementById("axbody").style.top ="98%"
		document.getElementById("cuerpoBusqueda").style.display ="block"
	} else {
		document.getElementById("axbody").style.display ="none"
		localStorage.removeItem("productos_buscados");
	}
	document.getElementById('resultadosMarcas').innerHTML = txtMarcas
	document.getElementById('res-tit').innerText = "("+losResultados.length+") Resultados"
}

function mueveCategorias(id_categoria) {
	if (document.getElementById('c_'+id_categoria)) {
		coso = document.getElementById('c_'+id_categoria)
		coso.style.display = "grid"
		if (coso.parentElement.parentElement.tagName == "LI") {
			coso2 = coso.parentElement.parentElement
			coso2.style.display = "grid"
			if (coso2.parentElement.parentElement.tagName == "LI") {
				coso3 = coso2.parentElement.parentElement
				coso3.style.display = "grid"
			}
		}
	}
}

function ocultaCategorias() {
	for (var i = 0; i<listaIdcats.length; i++) {
		document.getElementById("c_"+listaIdcats[i]).style.display ="none"
	}
}

var lalistaBusqueda   = [];
var lalistaCategorias = [];
var listaIdcats       = []
const removeRepeatNumbers = array => [... new Set(array)]

function ejemplo2() {
	//console.log("ejemplo2!!! = ")
	url = "https://lideart.com.mx/Automatizacion/listaJson3pruebas.php"
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": url,
		"method": "POST",
		"headers": {
			"content-type": "application/json"
		},
		"processData": false,
		"dataType": "JSON",
		"data": "{}"
	}

	$.ajax(settings).done(function(response) {
		lalista = response
		clientes = response
		for (var i = 0; i<clientes.length; i++) {
			clientes[i].nombrebusqueda = clientes[i].marca.replace(/á/g,'a').replace(/Á/g,'A').replace(/é/g,'e').replace(/É/g,'E').replace(/í/g,'i').replace(/Í/g,'I').replace(/ó/g,'o').replace(/Ó/g,'O').replace(/ú/g,'u').replace(/Ú/g,'U')
			tags = clientes[i].tags
			if (clientes[i].marca != '') {
				laListaDeMarcas.push(clientes[i].marca)
			}
			for (var j=0;j<tags.length;j++) {
				losTags.push(tags[j].toLowerCase())
			}
		}
		losTags = removeRepeatNumbers(losTags)
		laListaDeMarcas = removeRepeatNumbers(laListaDeMarcas)
		narray = []
		for (var i=0; i<laListaDeMarcas.length;i++) {
			laListaDeMarcas[i] = {"marca":laListaDeMarcas[i]}
		}
		for (var i=0; i<losTags.length;i++) {
			narray.push({"tag":losTags[i]})
		}
		//console.log("ESTOY AQUI!  = ")
		losTags = narray
		lalistaBusqueda = clientes
	});
	url = "https://lideart.com.mx/Automatizacion/listaJson3pruebasCategorias.php"
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": url,
		"method": "POST",
		"headers": {
			"content-type": "application/json"
		},
		"processData": false,
		"dataType": "JSON",
		"data": "{}"
	}

    
  window.onload = function(){
    $.ajax(settings).done(function(response) {
		lalistaCategorias = response
		txtCategorias = '<ul class="category-tree">'
		for (var i = 0; i<lalistaCategorias.length; i++) {
			idcat = lalistaCategorias[i].id_category;
			listaIdcats.push(idcat)
			namecat = lalistaCategorias[i].name;
			conclick = ''
			negritas = ''
			if (lalistaCategorias[i].hijos) {
				conclick ='onclick="cambiaClaseLista(\'c_'+idcat+'\')"'
				negritas = 'font-weight: bolder;'
				txtCategorias += '<li id="c_'+idcat+'" class="less" ">'
				txtCategorias += '<div class="checkbox"  >'
			} else {
				txtCategorias += '<li id="c_'+idcat+'" >'
				txtCategorias += '<div class="checkbox">'
			}
			txtCategorias += '<label>'
			txtCategorias += '<input type="checkbox" onclick="clickEnHijos(this)" value="'+namecat+'" class="category" name="categorias">'
			txtCategorias += '</label>'
			txtCategorias += '<div style="display: contents; '+negritas+'" '+conclick+'>'+lalistaCategorias[i].name+'</div>'
			txtCategorias += '</div> '
			if (lalistaCategorias[i].hijos) {
				txtCategorias += '<ul class="w-100"> '
				for (var j = 0; j<lalistaCategorias[i].hijos.length; j++) {
					idcat = lalistaCategorias[i].hijos[j].id_category;
					listaIdcats.push(idcat)
					namecat  = lalistaCategorias[i].hijos[j].name;
					conclick = ''
					negritas = ''
					if (lalistaCategorias[i].hijos[j].hijos) {
						conclick ='onclick="cambiaClaseLista(\'c_'+idcat+'\')"'
						negritas = 'font-weight: bolder;'
						txtCategorias += '<li id="c_'+idcat+'" class="less" ">'
						txtCategorias += '<div class="checkbox"  >'
					} else {
						txtCategorias += '<li id="c_'+idcat+'" >'
						txtCategorias += '<div class="checkbox">'
					}
					txtCategorias += '<label>'
					txtCategorias += '<input type="checkbox" onclick="clickEnHijos(this)" value="'+namecat+'" class="category" name="categorias">'
					txtCategorias += '</label>'
					txtCategorias += '<div style="display: contents; '+negritas+'" '+conclick+'>'+lalistaCategorias[i].hijos[j].name+'</div>'
					txtCategorias += '</div>'
					if (lalistaCategorias[i].hijos[j].hijos) {
						txtCategorias += '<ul class="w-100"> '
						for (var k = 0; k<lalistaCategorias[i].hijos[j].hijos.length; k++) {
							idcat = lalistaCategorias[i].hijos[j].hijos[k].id_category;
							listaIdcats.push(idcat)
							namecat = lalistaCategorias[i].hijos[j].hijos[k].name;
							txtCategorias += '<li id="c_'+idcat+'">'
							txtCategorias += '<div class="checkbox">'
							txtCategorias += '<label>'
							txtCategorias += '<input type="checkbox" onclick="BusquedaPorMarcas()" value="'+namecat+'" class="category" name="categorias">'
							txtCategorias += '</label>'
							txtCategorias += '<div style="display: contents;">'+lalistaCategorias[i].hijos[j].hijos[k].name+'</div>'
							txtCategorias += '</div>'
							txtCategorias += '</li>'
						}
						txtCategorias += '</ul> '
					}
					txtCategorias += '</li>'
				}
				txtCategorias += '</ul> '
				lalistaCategorias[0].hijos
			}
			txtCategorias += '</li> '
		}
		txtCategorias += '</ul>'
      
		// document.getElementById('resultadosCategorias').innerHTML = txtCategorias
		// ocultaCategorias()
	});

  }
	
}

function clickEnHijos(padre) {
	//console.log("padre = ")
	//console.log(padre)
	npadre = padre.parentElement.parentElement.parentElement
	if (npadre.childElementCount == 2) {
		listadoPadre = npadre.children[1]
		for (var i = 0; i< listadoPadre.childElementCount; i++) {
			if (listadoPadre.children[i].style.display != 'none') {
				padre_2 = listadoPadre.children[i].children[0].children[0].children[0]
				padre_2.checked = padre.checked
				npadre2 = padre_2.parentElement.parentElement.parentElement
				if (npadre2.childElementCount == 2) {
					listadoPadre2 = npadre2.children[1]
					for (var j = 0; j< listadoPadre2.childElementCount; j++) {
						if (listadoPadre2.children[j].style.display != 'none') {
							padre_3 = listadoPadre2.children[j].children[0].children[0].children[0]
							padre_3.checked = padre.checked
						}   
					}
				}
			}   
		}
	}
	BusquedaPorMarcas()
}

function cambiaClaseLista(id) {
	document.getElementById(id).className = document.getElementById(id).className=="less"?"more":"less"
}

function BusquedaPorMarcas() {
	// ocultaCategorias()
	nuevoTotalFiltro = 0;
	txt = ""			
	optionsMarca = {
		includeScore: true,
		shouldSort: true,
		findAllMatches: false,
		minMatchCharLength: 1,
		threshold: 0.45,		
		distance: 1000,
		useExtendedSearch: true,
		isCaseSensitive: false,
		keys: [
		{
			name: 'marca',
			weight: 1.0
		},
		{
			name: 'categorias',
			weight: 1.0
		}

		]
	};

	lasMarcas     = document.getElementsByName('marcas')
	lasCategorias = document.getElementsByName('categorias')
	final         = []
	nuevoFiltro   = []
	marcasSeleccionadas = []
	categoriasSeleccionadas = []
	for (var i=0;i<lasMarcas.length;i++) {
		textoMarcas =[]
		if (lasMarcas[i].checked) {
			lamarca = lasMarcas[i].value
			marcasSeleccionadas.push(lamarca)
		}
	}

	for (var i=0;i<lasCategorias.length;i++) {
		textoCategorias =[]
		if (lasCategorias[i].checked) {
			lacategoria = lasCategorias[i].value
			categoriasSeleccionadas.push(lacategoria)
		}
	}
	vacio = true
	arrayMarcas2 = []
	largo_arrayMarcas2 = 0;
	arrayCategorias2   = []
	largo_arrayCategorias2 = 0;

	if (marcasSeleccionadas.length > 0) {
		vacio = false
		txt   = ""
		final = []
		for (var i=0;i<lasMarcas.length;i++) {
			textoMarcas =[]
			if (lasMarcas[i].checked) {
				lamarca = lasMarcas[i].value
				textoMarcas.push({marca:"'"+lamarca})
				final.push({$or:textoMarcas})
			}
		}
		final = {$or:final}
		const fuseMarca = new Fuse(losResultados, optionsMarca);
		valorMarcas = fuseMarca.search(final)
		nuevoTotalFiltro = valorMarcas.length
		for (var i = 0; i< valorMarcas.length; i++) {
			act = valorMarcas[i].item.active
			nuevoFiltro.push(valorMarcas[i].item)
			bg  = (act!=1?"class='bg-danger text-light m-0'":"class='m-0'")
			inc = (act!=1?"(PRODUCTO-DESACTIVADO)":"")
			price     = parseFloat(valorMarcas[i].item.precio) * 1.16
			precio    = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(valorMarcas[i].item.precio)*1.16).toFixed(2)))
			descuento = parseFloat(valorMarcas[i].item.reduction)
			precioDescuento = price * descuento
			precioDescuento = price - precioDescuento
			precioDescuento = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(precioDescuento)).toFixed(2)))

		

			txt += "<li class='ui-menu-item' role='presentation'>";
			txt += "<a id='ui-id-2' class='ui-corner-all' tabindex='-1' onclick='llevame("+valorMarcas[i].item.id_product+",\""+valorMarcas[i].item.sku[0]+"\")'>";
			txt += "<span class='search_lewa'>";
			txt += "<img src='https://lideart.com.mx/"+valorMarcas[i].item.image_link+"'>";
			txt += "</span>";
			txt += "<span class='search_prawa'>";
			txt += "<span class='search_marka'>"+valorMarcas[i].item.marca+"</span>";
			txt += "<span class='search_nazwa'>"+valorMarcas[i].item.nombre+"</span>";
			if (descuento > 0) {
				txt += "<span class='search_cena' style='text-decoration: line-through'>"+precio+"</span>";
				txt += "<span class='search_cena'>"+precioDescuento+"</span>";
			} else {
				txt += "<span class='search_cena'>"+precio+"</span>";
			}
			txt += "</span>";
			txt += "<span class='clearfix'></span>";
			txt += "</a>";
			txt += "</li>";

			for (var j = 0; j< valorMarcas[i].item.categorias_detalles.length > 0; j++) {
				arrayCategorias2.push(valorMarcas[i].item.categorias_detalles[j].id_category)
			}
		}
		largo_arrayCategorias2 =arrayCategorias2.length
		arrayCategorias2 = [new Set(arrayCategorias2)][0]
		if (categoriasSeleccionadas.length > 0) {
			txt = ""
			final = []
			for (var i=0;i<lasCategorias.length;i++) {
				textoCategorias = []
				if (lasCategorias[i].checked) {
					lacategoria = lasCategorias[i].value
					textoCategorias.push({categorias:"'"+lacategoria})
					final.push({$or:textoCategorias})
				}
			}
			final = {$or:final}
			const fuseMarca = new Fuse(nuevoFiltro, optionsMarca);
			valorMarcas = fuseMarca.search(final)
			nuevoTotalFiltro = valorMarcas.length
			for (var i = 0; i< valorMarcas.length; i++) {
				act = valorMarcas[i].item.active
				nuevoFiltro.push(valorMarcas[i].item)
				bg  = (act!=1?"class='bg-danger text-light m-0'":"class='m-0'")
				inc = (act!=1?"(PRODUCTO-DESACTIVADO)":"")
				price     = parseFloat(valorMarcas[i].item.precio) * 1.16
				precio    = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(valorMarcas[i].item.precio)*1.16).toFixed(2)))
				descuento = parseFloat(valorMarcas[i].item.reduction)
				precioDescuento = price * descuento
				precioDescuento = price - precioDescuento
				precioDescuento = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(precioDescuento)).toFixed(2)))

				txt += "<li class='ui-menu-item' role='presentation'>";
				txt += "<a id='ui-id-2' class='ui-corner-all' tabindex='-1' onclick='llevame("+valorMarcas[i].item.id_product+",\""+valorMarcas[i].item.sku[0]+"\")'>";
				txt += "<span class='search_lewa'>";
				txt += "<img src='https://lideart.com.mx/"+valorMarcas[i].item.image_link+"'>";
				txt += "</span>";
				txt += "<span class='search_prawa'>";
				txt += "<span class='search_marka'>"+valorMarcas[i].item.marca+"</span>";
				txt += "<span class='search_nazwa'>"+valorMarcas[i].item.nombre+"</span>";
				if (descuento > 0) {
					txt += "<span class='search_cena' style='text-decoration: line-through'>"+precio+"</span>";
					txt += "<span class='search_cena'>"+precioDescuento+"</span>";
				} else {
					txt += "<span class='search_cena'>"+precio+"</span>";
				}
				txt += "</span>";
				txt += "<span class='clearfix'></span>";
				txt += "</a>";
				txt += "</li>";
				arrayMarcas2.push(valorMarcas[i].item.marca)
			}
			largo_arrayMarcas2 =arrayMarcas2.length
			arrayMarcas2 = [new Set(arrayMarcas2)][0]

		}
	} else if (categoriasSeleccionadas.length > 0 ) {
		vacio = false
		txt   = ""
		final = []
		for (var i=0;i<lasCategorias.length;i++) {
			textoCategorias = []
			if (lasCategorias[i].checked) {
				lacategoria = lasCategorias[i].value
				textoCategorias.push({categorias:"'"+lacategoria})
				final.push({$or:textoCategorias})
			}
		}
		final = {$or:final}
		const fuseMarca = new Fuse(losResultados, optionsMarca);
		valorMarcas = fuseMarca.search(final)
		nuevoTotalFiltro = valorMarcas.length
		for (var i = 0; i< valorMarcas.length; i++) {
			act = valorMarcas[i].item.active
			nuevoFiltro.push(valorMarcas[i].item)
			bg  = (act!=1?"class='bg-danger text-light m-0'":"class='m-0'")
			inc = (act!=1?"(PRODUCTO-DESACTIVADO)":"")
			price     = parseFloat(valorMarcas[i].item.precio) * 1.16
			precio    = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(valorMarcas[i].item.precio)*1.16).toFixed(2)))
			descuento = parseFloat(valorMarcas[i].item.reduction)
			precioDescuento = price * descuento
			precioDescuento = price - precioDescuento
			precioDescuento = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(precioDescuento)).toFixed(2)))

			txt += "<li class='ui-menu-item' role='presentation'>";
			txt += "<a id='ui-id-2' class='ui-corner-all' tabindex='-1' onclick='llevame("+valorMarcas[i].item.id_product+",\""+valorMarcas[i].item.sku[0]+"\")'>";
			txt += "<span class='search_lewa'>";
			txt += "<img src='https://lideart.com.mx/"+valorMarcas[i].item.image_link+"'>";
			txt += "</span>";
			txt += "<span class='search_prawa'>";
			txt += "<span class='search_marka'>"+valorMarcas[i].item.marca+"</span>";
			txt += "<span class='search_nazwa'>"+valorMarcas[i].item.nombre+"</span>";
			if (descuento > 0) {
				txt += "<span class='search_cena' style='text-decoration: line-through'>"+precio+"</span>";
				txt += "<span class='search_cena'>"+precioDescuento+"</span>";
			} else {
				txt += "<span class='search_cena'>"+precio+"</span>";
			}
			txt += "</span>";
			txt += "<span class='clearfix'></span>";
			txt += "</a>";
			txt += "</li>";
			arrayMarcas2.push(valorMarcas[i].item.marca)
		}
		largo_arrayMarcas2 =arrayMarcas2.length
		arrayMarcas2 = [new Set(arrayMarcas2)][0]
	}

	if (vacio) {
		nuevoTotalFiltro = losResultadosValor.length
		for (var i = 0; i< losResultadosValor.length; i++) {
			act = losResultadosValor[i].item.active
			bg  = (act!=1?"class='bg-danger text-light m-0'":"class='m-0'")
			inc = (act!=1?"(PRODUCTO-DESACTIVADO)":"")
			price     = parseFloat(losResultadosValor[i].item.precio) * 1.16
			precio    = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(losResultadosValor[i].item.precio)*1.16).toFixed(2)))
			descuento = parseFloat(losResultadosValor[i].item.reduction)
			precioDescuento = price * descuento
			precioDescuento = price - precioDescuento
			precioDescuento = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(precioDescuento)).toFixed(2)))

			txt += "<li class='ui-menu-item' role='presentation'>";
			txt += "<a id='ui-id-2' class='ui-corner-all' tabindex='-1' onclick='llevame("+losResultadosValor[i].item.id_product+",\""+losResultadosValor[i].item.sku[0]+"\")'>";
			txt += "<span class='search_lewa'>";
			txt += "<img src='https://lideart.com.mx/"+losResultadosValor[i].item.image_link+"'>";
			txt += "</span>";
			txt += "<span class='search_prawa'>";
			txt += "<span class='search_marka'>"+losResultadosValor[i].item.marca+"</span>";
			txt += "<span class='search_nazwa'>"+losResultadosValor[i].item.nombre+"</span>";
			if (descuento > 0) {
				txt += "<span class='search_cena' style='text-decoration: line-through'>"+precio+"</span>";
				txt += "<span class='search_cena'>"+precioDescuento+"</span>";
			} else {
				txt += "<span class='search_cena'>"+precio+"</span>";
			}
			txt += "</span>";
			txt += "<span class='clearfix'></span>";
			txt += "</a>";
			txt += "</li>";
			for (var j = 0; j< losResultadosValor[i].item.categorias_detalles.length > 0; j++) {
				arrayCategorias2.push(losResultadosValor[i].item.categorias_detalles[j].id_category)
			}
			arrayMarcas2.push(losResultadosValor[i].item.marca)

		}
		largo_arrayMarcas2 =arrayMarcas2.length
		largo_arrayCategorias2 =arrayCategorias2.length
		arrayCategorias2 = [new Set(arrayCategorias2)][0]
		arrayMarcas2 = [new Set(arrayMarcas2)][0]
	}
	if (largo_arrayMarcas2 > 0) {
		arrayMarcas.forEach(element => document.getElementById(element).style.display ="none")
		arrayMarcas2.forEach(element => document.getElementById(element).style.display ="block")
	} else {
		arrayMarcas.forEach(element => document.getElementById(element).style.display ="block")
	}
	if (largo_arrayCategorias2 > 0) {
		arrayCategorias2.forEach(element =>  mueveCategorias(element))
	} else {
		arrayCategorias.forEach(element => mueveCategorias(element))
	}
	document.getElementById('res-tit').innerText = "("+nuevoTotalFiltro+") Resultados"
	if (txt != "") {
		document.getElementById("axbody").innerHTML =txt
		document.getElementById("axbody").style.maxHeight ="560px"
		document.getElementById("axbody").style.minHeight ="560px"
		document.getElementById("axbody").style.overflowY ="scroll"
		document.getElementById("axbody").style.display ="block"
		document.getElementById("axbody").style.width ="100%"
		document.getElementById("axbody").style.top ="98%"
		document.getElementById("cuerpoBusqueda").style.display ="block"
	} else {
		document.getElementById("axbody").style.display ="none"
		localStorage.removeItem("productos_buscados");
	}
}
ejemplo2()

var intervaloDeBusqueda = "";
if (window.location.pathname.includes('Busqueda') || window.location.pathname.includes('bucador')) {
	intervaloDeBusqueda = setInterval(function(){ llamaBusqueda() },1000)
}

function llamaBusqueda() {
	if (document.getElementById('ordenar-busqueda') && lalistaBusqueda.length > 0) {
		clearInterval(intervaloDeBusqueda);
		buscarUno()
	}
}



/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
///////////////////// BUSQUEDAS Y FILTROS PARA RESULTADOS ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
function ejemplo2Fijos(arrayCategoriasFijos){
	url = "https://lideart.com.mx/Automatizacion/listaJson3pruebas.php"
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": url,
		"method": "POST",
		"headers": {
			"content-type": "application/json"
		},
		"processData": false,
		"dataType": "JSON",
		"data": "{}"
	}

	$.ajax(settings).done(function(response) {
		lalista  = response
		clientes = response
		for (var i = 0; i<clientes.length; i++) {
			clientes[i].nombrebusqueda = clientes[i].marca.replace(/á/g,'a').replace(/Á/g,'A').replace(/é/g,'e').replace(/É/g,'E').replace(/í/g,'i').replace(/Í/g,'I').replace(/ó/g,'o').replace(/Ó/g,'O').replace(/ú/g,'u').replace(/Ú/g,'U')
			tags = clientes[i].tags
			if (clientes[i].marca != '') {
				laListaDeMarcas.push(clientes[i].marca)
			}
			for (var j=0;j<tags.length;j++) {
				losTags.push(tags[j].toLowerCase())
			}
		}
		losTags = removeRepeatNumbers(losTags)
		laListaDeMarcas = removeRepeatNumbers(laListaDeMarcas)
		narray = []
		for (var i=0; i<laListaDeMarcas.length;i++) {
			laListaDeMarcas[i] = {"marca":laListaDeMarcas[i]}
		}
		for (var i=0; i<losTags.length;i++) {
			narray.push({"tag":losTags[i]})
		}
		//console.log("ESTOY AQUI!  = ")
		losTags = narray
		lalistaBusqueda = clientes
	});
	if (document.getElementById('resultadosCategoriasFijas')) {
		if (document.getElementById('resultadosCategoriasFijas').childElementCount == 0) {
			url = "https://lideart.com.mx/Automatizacion/listaJson3pruebasCategorias.php"
			var settings = {
				"async": true,
				"crossDomain": true,
				"url": url,
				"method": "POST",
				"headers": {
					"content-type": "application/json"
				},
				"processData": false,
				"dataType": "JSON",
				"data": "{}"
			}

			$.ajax(settings).done(function(response) {
				lalistaCategorias = response
				txtCategorias = '<ul class="category-tree">'
				for (var i = 0; i<lalistaCategorias.length; i++) {
					idcatFijo = lalistaCategorias[i].id_category;
					listadoCategorias = lalistaCategorias[i].id_category;
					listaIdcats.push(idcatFijo)
					namecat = lalistaCategorias[i].name;
					conclick = ''
					negritas = ''
					if (lalistaCategorias[i].hijos) {
						conclick ='onclick="cambiaClaseLista(\'cf_'+idcatFijo+'\')"'
						negritas = 'font-weight: bolder;'
						txtCategorias += '<li id="cf_'+idcatFijo+'" class="less" ">'
						txtCategorias += '<div class="checkbox"  >'
					} else {
						txtCategorias += '<li id="cf_'+idcatFijo+'" >'
						txtCategorias += '<div class="checkbox">'
					}
					txtCategorias += '<label>'
					txtCategorias += '<input type="checkbox" id_categorias="'+listadoCategorias+'" onclick="clickEnHijosFijos(this)" value="'+namecat+'" class="category" name="categoriasFijas">'
					txtCategorias += '</label>'
					txtCategorias += '<div style="display: contents; '+negritas+'" '+conclick+'>'+lalistaCategorias[i].name+'</div>'
					txtCategorias += '</div> '
					if (lalistaCategorias[i].hijos) {
						txtCategorias += '<ul class="w-100"> '
						for (var j = 0; j<lalistaCategorias[i].hijos.length; j++) {
							listadoCategorias = lalistaCategorias[i].id_category+","+lalistaCategorias[i].hijos[j].id_category;
							idcatFijo = lalistaCategorias[i].hijos[j].id_category;
							listaIdcats.push(idcatFijo)
							namecat  = lalistaCategorias[i].hijos[j].name;
							conclick = ''
							negritas = ''
							if (lalistaCategorias[i].hijos[j].hijos) {
								conclick ='onclick="cambiaClaseLista(\'cf_'+idcatFijo+'\')"'
								negritas = 'font-weight: bolder;'
								txtCategorias += '<li id="cf_'+idcatFijo+'" class="less" ">'
								txtCategorias += '<div class="checkbox"  >'
							} else {
								txtCategorias += '<li id="cf_'+idcatFijo+'" >'
								txtCategorias += '<div class="checkbox">'
							}
							txtCategorias += '<label>'
							txtCategorias += '<input type="checkbox" id_categorias="'+listadoCategorias+'" onclick="clickEnHijosFijos(this)" value="'+namecat+'" class="category" name="categoriasFijas">'
							txtCategorias += '</label>'
							txtCategorias += '<div style="display: contents; '+negritas+'" '+conclick+'>'+lalistaCategorias[i].hijos[j].name+'</div>'
							txtCategorias += '</div>'
							if (lalistaCategorias[i].hijos[j].hijos) {
								txtCategorias += '<ul class="w-100"> '
								for (var k = 0; k<lalistaCategorias[i].hijos[j].hijos.length; k++) {
									idcatFijo = lalistaCategorias[i].hijos[j].hijos[k].id_category;
									listadoCategorias = lalistaCategorias[i].id_category+","+lalistaCategorias[i].hijos[j].id_category+","+lalistaCategorias[i].hijos[j].hijos[k].id_category;
									listaIdcats.push(idcatFijo)
									namecat = lalistaCategorias[i].hijos[j].hijos[k].name;
									txtCategorias += '<li id="cf_'+idcatFijo+'">'
									txtCategorias += '<div class="checkbox">'
									txtCategorias += '<label>'
									txtCategorias += '<input type="checkbox" id_categorias="'+listadoCategorias+'" onclick="busquedaPorMarcasFijo()" value="'+namecat+'" class="category" name="categoriasFijas">'
									txtCategorias += '</label>'
									txtCategorias += '<div style="display: contents;">'+lalistaCategorias[i].hijos[j].hijos[k].name+'</div>'
									txtCategorias += '</div>'
									txtCategorias += '</li>'
								}
								txtCategorias += '</ul> '
							}
							txtCategorias += '</li>'
						}
						txtCategorias += '</ul> '
						lalistaCategorias[0].hijos
					}
					txtCategorias += '</li> '
				}
				txtCategorias += '</ul>'
				// document.getElementById('resultadosCategoriasFijas').innerHTML = txtCategorias
				// ocultaCategoriasFijas(arrayCategoriasFijos)
			});
		}
	}
}
function clickEnHijosFijos(padre) {
	//console.log("clickEnHijosFijos padre = ")
	//console.log(padre)
	npadre = padre.parentElement.parentElement.parentElement
	if (npadre.childElementCount == 2) {
		listadoPadre = npadre.children[1]
		for (var i = 0; i< listadoPadre.childElementCount; i++) {
			if(listadoPadre.children[i].style.display != 'none'){
				padre_2 = listadoPadre.children[i].children[0].children[0].children[0]
				padre_2.checked = padre.checked
				npadre2 = padre_2.parentElement.parentElement.parentElement
				if (npadre2.childElementCount == 2) {
					listadoPadre2 = npadre2.children[1]
					for (var j = 0; j< listadoPadre2.childElementCount; j++) {
						if (listadoPadre2.children[j].style.display != 'none') {
							padre_3 = listadoPadre2.children[j].children[0].children[0].children[0]
							padre_3.checked = padre.checked
						}   
					}
				}
			}   
		}
	}
	busquedaPorMarcasFijo()
}

function busquedaPorMarcasFijo() {
	nuevoTotalFiltro = 0;
	txt = ""			
	optionsMarca = {
		includeScore: true,
		shouldSort: true,
		findAllMatches: false,
		minMatchCharLength: 1,
		threshold: 0.45,		
		distance: 1000,
		useExtendedSearch: true,
		isCaseSensitive: false,
		keys: [
		{
			name: 'marca',
			weight: 1.0
		},
		{
			name: 'categorias',
			weight: 1.0
		}

		]
	};

	lasMarcas     = document.getElementsByName('marcas')
	lasCategorias = document.getElementsByName('categoriasFijas')
	//console.log("lasCategorias = " +  lasCategorias)
	final                     = []
	nuevoFiltro               = []
	marcasSeleccionadas       = []
	categoriasSeleccionadas   = []
	idCategoriasSeleccionadas = []
	// for(var i=0;i<lasMarcas.length;i++){
	// 	textoMarcas =[]
	// 	if(lasMarcas[i].checked){
	// 		lamarca = lasMarcas[i].value
	// 		marcasSeleccionadas.push(lamarca)
	// 	}
	// }

	// for(var i=0;i<lasCategorias.length;i++){
	// 	textoCategorias =[]
	// 	if(lasCategorias[i].checked){
	// 		lacategoria = lasCategorias[i].value
	// 		categoriasSeleccionadas.push(lacategoria)
	// 		idCategoriasSeleccionadas.push(lasCategorias[i].getAttribute('id_categorias'))
	// 	}
	// }
	vacio                  = true
	arrayMarcas2           = []
	largo_arrayMarcas2     = 0;
	arrayCategorias2       = []
	largo_arrayCategorias2 = 0;
	//console.log(" ---------------------------------------------------------------------------------------------------- ")
	//console.log(" ---------------------------------------------------------------------------------------------------- ")
	//console.log(" ---------------------------------------------------------------------------------------------------- ")
	//console.log("idCategoriasSeleccionadas = " + idCategoriasSeleccionadas)
	// document.getElementById('idscats').value = idCategoriasSeleccionadas.join('_').replace(/,/g,'-').replace(/_/g,',')
	// lasPaginas = document.getElementById('el_paginado_busqueda').children[0]
	// //.children[0].children[0].href.split('cts')[0]
	// for(var i = 0; i < lasPaginas.childElementCount; i++){
	// 	//lasPaginas.children[i].children[0].href.split('cts')[0]
	//// 	console.log(" ----- " + lasPaginas.children[i].children[0].href.split('&cts')[0] + "&cts ----- ")
	// }
	//console.log(" ---------------------------------------------------------------------------------------------------- ")
	//console.log(" ---------------------------------------------------------------------------------------------------- ")
	//console.log(" ---------------------------------------------------------------------------------------------------- ")

	if (marcasSeleccionadas.length > 0) {
		vacio = false
		txt   = ""
		for (var i=0;i<lasMarcas.length;i++) {
			textoMarcas = []
			if (lasMarcas[i].checked) {
				lamarca = lasMarcas[i].value
				textoMarcas.push({marca:"'"+lamarca})
				final.push({$or:textoMarcas})
			}

		}
	}
	if (categoriasSeleccionadas.length > 0) {
		vacio = false
		txt   = ""
		final = []
		for (var i=0;i<lasCategorias.length;i++) {
			textoCategorias = []
			if (lasCategorias[i].checked) {
				lacategoria = lasCategorias[i].value
				textoCategorias.push({categorias:"'"+lacategoria})
				final.push({$or:textoCategorias})
			}
		}
	}
	losResultadosFijosFiltrados = losResultadosFijos
	losResultadosFijosValorFiltrados = losResultadosFijosValor
	if (final.length > 0) {
		final = {$or:final}
		//console.log("final = " + final  )
		const fuseMarca = new Fuse(losResultadosFijos, optionsMarca);
		valorMarcas = fuseMarca.search(final)
		losResultadosFijosFiltrados 		= [];
		losResultadosFijosValorFiltrados 	= [];
		for (var i = 0 ; i<valorMarcas.length;i++) {
			losResultadosFijosFiltrados.push(valorMarcas[i].item);
			losResultadosFijosValorFiltrados.push(valor[i]);
		}
	}
	//console.log("losResultadosFijosFiltrados = " + losResultadosFijosFiltrados  )
	// return;
	pattern = document.getElementById('filtro-doble').value
	total   = pattern.replace(/  /g,' ')
	asd     = pattern.replace(/  /g,' ').replace(/  /g,' ').replace(/  /g,' ').split(" ")
	nsearch = ""
	espacio = ""
	for (var i= 0; i< asd.length; i++) {
		if (asd[i] != "") {
			nsearch += espacio+""+asd[i]
			espacio  = " "
		}
	}
	valor = pattern
	txt   = ""
	txtMarcas     = ""
	txtCategorias = ""
	arrayCategoriasFijos = []
	arrayMarcas = []
	res = [] 
	if (valor != "") {
		nvalor = valor.replace(/  /g,' ').replace(/  /g,' ').split(' ')
		esSKU  = false;
		if (nvalor.length > 0) {
			options.minMatchCharLength = 1
			final = []
			if (nvalor.length == 1) {
				const regex = /([A-Z|a-z]{4}|[0-9]{4})-([0-9]{1})/gm;
				const str = nvalor[0];
				let m;

				while ((m = regex.exec(str)) !== null) {
					if (m.index === regex.lastIndex) {
						regex.lastIndex++;
					}
					m.forEach((match, groupIndex) => {
						esSKU =true
					});
				}
			}
			if (!esSKU) {
				for(var i = 0; i< nvalor.length; i++){
					valor = nvalor[i]
					finalsku = []
					if (valor.length > 1) {
						finalsku.push({nombre:""+valor})
						finalsku.push({nombrebusqueda:""+valor})
						finalsku.push({tags:""+valor})
						finalsku.push({description:""+valor})
						leval = valor.replace(/as$/,'')
						leval = leval.replace(/es$/,'')
						leval = leval.replace(/os$/,'')
						if (leval != valor) {
							finalsku.push({nombre:""+leval})
							finalsku.push({nombrebusqueda:""+leval})
							finalsku.push({tags:""+leval})
							finalsku.push({description:""+leval})
						}
						final.push({$or:finalsku})
					}
				}
				final  = {$and:final}
				nvalor = final;
				variables = [ 
				{"threshold":0.45, "distance":1000, "minMatchCharLength":1},
				]
				options.threshold = variables[0].threshold
				options.distance = variables[0].distance
				options.minMatchCharLength = variables[0].minMatchCharLength
				const fuse = new Fuse(losResultadosFijosFiltrados, options);
				valor =fuse.search(nvalor)
			} else {
				valor  = nvalor[0]
				leval  = valor.replace(/as$/,'')
				leval  = leval.replace(/es$/,'')
				leval  = leval.replace(/os$/,'')
				nvalor = valor+"$||'"+valor+"||"+leval+"$||'"+leval
				const fuse = new Fuse(losResultadosFijosFiltrados, options);
				valor =fuse.search(nvalor)
			}
		} else {
			options.minMatchCharLength = 4
			minLength = 4
			leval  = valor.replace(/as$/,'')
			leval  = leval.replace(/es$/,'')
			leval  = leval.replace(/os$/,'')
			nvalor = valor+"$||'"+valor+"||"+leval+"$||'"+leval
			if (valor.length >= minLength) {
				const fuse = new Fuse(losResultadosFijosFiltrados, options);
				valor =fuse.search(nvalor)
			}
		}
	}
	if (valor == '') {
		valor = losResultadosFijosValorFiltrados
	}
	textoBuscado = pattern; 
	textoBuscado = textoBuscado.replace(/\+/g,' '); 
	for (var i = 0; i < valor.length; i++) {
		if ((textoBuscado.toLowerCase() == 'cricut' || textoBuscado.toLowerCase() == 'cameo'  || textoBuscado.toLowerCase() == 'cameo4'  || textoBuscado.toLowerCase() == 'cameo 4' || textoBuscado.toLowerCase().includes('silhouette')) && valor[i].item.nombre.toLowerCase().includes('plotter')) {
			valor[i].score=valor[i].score/100
		}
		
		if (textoBuscado.toLowerCase() == 'minc' && valor[i].item.nombre.toLowerCase().includes('laminadora')) {
			valor[i].score=valor[i].score/100
		}

		if (textoBuscado.toLowerCase() == 'cricut' && valor[i].item.nombre.toLowerCase().includes('silhouette')) {
			valor[i].score=valor[i].score+1
		}
		if (textoBuscado.toLowerCase().includes("maker") && valor[i].item.nombre.toLowerCase().includes('maker')) {
			valor[i].score=valor[i].score/100
			if (valor[i].item.nombre.toLowerCase().includes(textoBuscado.toLowerCase())) {
				valor[i].score=valor[i].score/100
			}
			if (valor[i].item.nombre.toLowerCase().includes('plotter')) {
				valor[i].score=valor[i].score/100
			}
		}
		if ((textoBuscado.toLowerCase() == 'silhouette' || textoBuscado.toLowerCase().includes('cameo')) && valor[i].item.nombre.toLowerCase().includes('cricut')) {
			valor[i].score=valor[i].score+1
		}
		if (valor[i].item['categoria'] == "EQUIPO") {
			valor[i].score+=1
		}
	}
	valor.sort((a,b)=> (a.score > b.score ? 1 : -1))
	losResultadosFijosFiltrados = []
	losResultadosFijosValorFiltrados = []
	for (var i = 0; i < valor.length; i++) {
		if (valor[i].score<.92) {
			if (valor[i].item.marca != '') {
				arrayMarcas.push(valor[i].item.marca)
			} else {
				valor[i].item.marca = 'Otra'
				arrayMarcas.push('Otra')
			}
			if (valor[i].item.categorias_detalles.length > 0) {
				for (var j = 0; j< valor[i].item.categorias_detalles.length > 0; j++) {
					arrayCategoriasFijos.push(valor[i].item.categorias_detalles[j].id_category)
				}
			} else {
				arrayCategoriasFijos.push('Otra')
			}
			losResultadosFijosFiltrados.push(valor[i].item);
			losResultadosFijosValorFiltrados.push(valor[i]);
		}
	}
	//console.log("c) 1 valor = ")
	//console.log(valor)
	valor = losResultadosFijosValorFiltrados;
	//console.log("2 valor = ")
	//console.log(valor)

	valor   = nuevoOrdenMundial(orden,valor)
	maxpage = parseInt(valor.length/visibles)+1
	if (pagina>maxpage) {
		window.location.search = window.location.search.replace('p='+pagina,'p='+maxpage)
	}
	txt     = ""
	cuenta  = 0
	txtlist = ''
	for (var i= ((pagina-1)*visibles); i< (pagina*visibles); i++) {
		if (i < valor.length) {
			url    = valor[i].item.link
			image  = valor[i].item.image_link.replace("-small_default","")
			nombre = valor[i].item.nombre
			price  = parseFloat(valor[i].item.precio) * 1.16
			precio = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(valor[i].item.precio)*1.16).toFixed(2)))
			descuento = parseFloat(valor[i].item.reduction)
			precioDescuento = price * descuento
			precioDescuento = price - precioDescuento
			precioDescuento = "$"+ (new Intl.NumberFormat("en-EN").format((parseFloat(precioDescuento)).toFixed(2)))

			txtlist += "<li class='product_item col-xs-12 col-sm-6 col-md-4 col-lg-2' >"
			txtlist += '<article class="product-miniature js-product-miniature">'
			txtlist += '<div class="thumbnail-container">'
			txtlist += '<div class="dd-product-image">'
			txtlist += '<a  href="/'+url+'" class="thumbnail product-thumbnail" style="min-height:272px;">'
			txtlist += '<img class="ddproduct-img1" src="https://lideart.com.mx/'+image+'" alt="'+nombre+'" style="top: 50%;position: absolute;left: 0;transform: translate(0%, -50%);">'
			txtlist += '</a>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '<div class="product-description">'
			txtlist += '<h3 class="h3 product-title" itemprop="name">'
			txtlist += '<a href="/'+url+'">'+nombre+'</a>'
			txtlist += '</h3>'
			txtlist += '<div class="product-price-and-shipping">'
			txtlist += '<span class="sr-only">Precio</span>'
			if (descuento > 0) {
				txtlist += '<span itemprop="price" class="price" style="text-decoration: line-through; color:#1BC0E0">'+precio+'</span><br>'
				txtlist += '<span itemprop="price" class="price" style="color:#1BC0E0; font-size:18px; font-weight:bold">'+precioDescuento+'</span>'
			} else {
				txtlist += '<br><span itemprop="price" class="price" style="color:#1BC0E0; font-size:18px; font-weight:bold">'+precio+'</span>'
			}
			txtlist += '</div>'
			txtlist += '<div class="product-detail" itemprop="description">'
			txtlist += '<h1 style="text-align: center; color: #259bbc;">'
			txtlist += '<span style="text-decoration: underline;">'
			txtlist += '<em>'
			txtlist += '<strong>'+nombre+'</strong>'
			txtlist += '</em>'
			txtlist += '</span>'
			txtlist += '</h1>'
			txtlist += '<div style="text-align: start;">'
			txtlist += '<img src="https://lideart.com.mx/img_desc/0540-0240-0052/LOGO_COLOR_b6d217a4-acfa-43d2-bcea-8e0208be091e_240x240.png" alt="" style="float: none;">&nbsp;'
			txtlist += '</div>'
			txtlist += '<p>'
			txtlist += '</p>'
			txtlist += '</div>'
			txtlist += '</div>	'
			txtlist += '<div class="highlighted-informations no-variants">'
			txtlist += '<div class="product-actions">'
			txtlist += '<div class="buttons-actions_align">'
			txtlist += '<a href="/'+url+'" title="Mostrar" class="view"></a>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '</div>'
			txtlist += '</article>'
			txtlist += '</li>'
			cuenta++
		}
	}

	txtPaginado  = '<div class="col-md-7-5" id="el_paginado_busqueda">'
	txtPaginado += '<ul class="page-list clearfix text-xs-center">'

	pagina = parseInt(pagina)
	if (visibles != valor.length) {
		if (pagina > 1) {
			txtPaginado += '<li><a rel="prev" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina-1)))+'" class="previous "><i class="st fa-angle-double-left"></i></a></li>'
			if ((pagina-1)>1) {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1...</a></li>'
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina-1)))+'" class="">'+(pagina-1)+'</a></li>'
				txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+(pagina)+'</a></li>'
			} else {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1</a></li>'
				txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+(pagina)+'</a></li>'
			}
		} else if (pagina == 1) {
			txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href+'" class="disables ">'+pagina+'</a></li>'
			if (visibles*2 < valor.length) {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'
				if (visibles*3 < valor.length) {
					txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+2)))+'" class="">'+(pagina+2)+'</a></li>'
				}
			}
		}

		if (pagina < maxpage) {
			if ((pagina+1) < maxpage) {
				if (pagina != 1) {
					txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'
				}
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+maxpage))+'" class="">...'+maxpage+'</a></li>'
			} else {
				txtPaginado += '<li><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="">'+(pagina+1)+'</a></li>'
			}
			txtPaginado += '<li><a rel="next" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p="+(pagina+1)))+'" class="next "><i class="st fa-angle-double-right"></i></a></li>'
		}
	} else {
		txtPaginado += '<li class="current"><a rel="nofollow" href="'+window.location.href.replace(window.location.search,window.location.search.replace("p="+pagina,"p=1"))+'" class="">1</a></li>'
	}
	txtPaginado += '</ul>'
	txtPaginado += '</div>'
	document.getElementById('resBusqueda').innerHTML = txtlist
	if (!document.getElementById('el_paginado_busqueda')) {
		document.getElementById('totResBusqueda').parentElement.innerHTML += txtPaginado
	} else {
		document.getElementById('el_paginado_busqueda').outerHTML = txtPaginado
	}
	document.getElementById('totResBusqueda').innerText  = "Mostrando "+((pagina-1)*visibles)+" - "+((pagina*visibles <= valor.length) ? pagina*visibles:valor.length)+" de "+valor.length+" articulo(s)."
	document.getElementById('totResBusqueda2').innerText = "Mostrando "+((pagina-1)*visibles)+" - "+((pagina*visibles <= valor.length) ? pagina*visibles:valor.length)+" de "+valor.length+" articulo(s)."
	document.getElementsByClassName('heading-cms')[0].innerText = "Busqueda ("+valor.length+" Resultados)."
	document.getElementById('fondo-cargaInicial').className = 'fondo-carga inactivo'
	if (document.getElementById('list').className == "selected") {
		document.getElementById('list').children[0].click()
	}
	// ejemplo2Fijos(arrayCategoriasFijos)
}

function ocultaCategoriasFijas(arrayCategoriasFijos) {
	//console.log("arrayCategoriasFijos = ")
	//console.log(arrayCategoriasFijos)
	for (var i = 0; i<listaIdcats.length; i++) {
		//console.log("Quitar :: cf_"+listaIdcats[i])
		if (document.getElementById("cf_"+listaIdcats[i])) {
			document.getElementById("cf_"+listaIdcats[i]).style.display = "none"
		}
	}
	arrayCategoriasFijos = [new Set(arrayCategoriasFijos)][0]
	//console.log(arrayCategoriasFijos)
	arrayCategoriasFijos.forEach(element => mueveCategoriasFijas(element))
}

function mueveCategoriasFijas(id_categoriaFija) {
	//console.log('----cf_'+id_categoriaFija)
	if (document.getElementById('cf_'+id_categoriaFija)) {
		cosoFijo = document.getElementById('cf_'+id_categoriaFija)
		cosoFijo.style.display = "grid"
		if (cosoFijo.parentElement.parentElement.tagName == "LI") {
			cosoFijo2 = cosoFijo.parentElement.parentElement
			cosoFijo2.style.display = "grid"
			if (cosoFijo2.parentElement.parentElement.tagName == "LI") {
				cosoFijo3 = cosoFijo2.parentElement.parentElement
				cosoFijo3.style.display = "grid"
			}
		}
	}
}


function llevame(id,sku) {

	
	
		url = "https://lideart.com.mx/Automatizacion/apis/esPaquete.php?id_product="+sku
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": url,
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"processData": false,
			"dataType": "JSON",
			"data": "{}"
		}

	

		$.ajax(settings).done(function(response) {
			if (response ==1){
				window.location.href = '/#/descripcion-paquetes/'+id;
			}
			else{
				window.location.href = '/#/descripcion-producto/'+id;
			}
			
		});
	 
}
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////









