var documenterSearchIndex = {"docs":
[{"location":"api.html#API","page":"API","title":"API","text":"","category":"section"},{"location":"api.html","page":"API","title":"API","text":"DocTestSetup = quote\n    using LittleEphemeris\nend","category":"page"},{"location":"api.html","page":"API","title":"API","text":"Modules = [LittleEphemeris]\nPrivate = false","category":"page"},{"location":"api.html#LittleEphemeris.BodyCoeffs","page":"API","title":"LittleEphemeris.BodyCoeffs","text":"BodyCoeffs\n\nEstructura de coeficientes de un cuerpo\n\nbodyID::Int: ID del cuerpo.\nbodyName::String: Nombre del cuerpo.\nnumberOfPolynomials::Int: Numero de polinomios.\nnumberOfCoeffs::Int: Número de coeficientes en cada polinomio.\ntimeIntervals::Vector{FloatType}: Vector de intervalos de tiempo.\nx_coeffs::Matrix{FloatType}: Matriz de coeficientes de las coordenadas en el eje x.\ny_coeffs::Matrix{FloatType}: Matriz de coeficientes de las coordenadas en el eje y.\nz_coeffs::Matrix{FloatType}: Matriz de coeficientes de las coordenadas en el eje z.\nvx_coeffs::Matrix{FloatType}: Matriz de coeficientes de la velocidad en el eje x.\nvy_coeffs::Matrix{FloatType}: Matriz de coeficientes de la velocidad en el eje y.\nvz_coeffs::Matrix{FloatType}: Matriz de coeficientes de la velocidad en el eje z.\n\n\n\n\n\n","category":"type"},{"location":"api.html#LittleEphemeris.BodyCoeffs-2","page":"API","title":"LittleEphemeris.BodyCoeffs","text":"BodyCoeffs\n\nMetodo del objeto que permite calcular las coordenadas y/o las velocidades del cuerpo especificado en el instante de tiempo especificado.\n\nArgumentos de entrada\n\nt::Float64: Instante de cuerpo en el que se quieren conocer las coordenadas y/o velocidades del cuerpo.\ncode::Int: Integer que indica los parametros de salida. Por defecto code = 3.\ncode = 1: Devuelve el vector de las coordenadas.\ncode = 2: Devuelve el vector de las velocidades.\ncode = 3: Devuelve el vector de las coordenadas y las velocidades.\n\nArgumentos de salida\n\nres::Vector{Float64}: Vector con las coordenadas y/o las velocidades del cuerpo especificado en el instante de tiempo especificado.\n\n\n\n\n\n","category":"type"},{"location":"api.html#LittleEphemeris.BodyCoeffs-Tuple{String, String, Union{Int64, String}, Tuple{Float64, Float64}}","page":"API","title":"LittleEphemeris.BodyCoeffs","text":"BodyCoeffs\n\nConstructora del objeto.\n\nArgumentos de entrada.\n\ninfo_file_path::String: Ruta del fichero de información.\nfile_path::String: Ruta del fichero de coeficientes.\nbody::Union{Int, String}: ID o Nombre del cuerpo.\ntspan::Tuple{Float64, Float64}: Intervalo de tiempo al que pertenecen los polinomios.\n\nArgumentos de salida.\n\nbc::BodyCoeffs{Float64}: Objeto de coeficientes del cuerpo especificado\n\n\n\n\n\n","category":"method"},{"location":"api.html#LittleEphemeris.add_coeffs-Tuple{Vector{LittleEphemeris.CoefficientsInfo}, Matrix{Float64}, LittleEphemeris.CoefficientsInfo, Vector{Matrix{Float64}}}","page":"API","title":"LittleEphemeris.add_coeffs","text":"add_coeffs\n\nInserta de manera ordenada nuevos coeficientes a una tabla de coeficientes existente\n\nArgumentos de entrada:\n\ncoeffs_info_vec::Vector{CoefficientsInfo}: Vector de structuras de información de coeficientes.\ncoeffs_table::Matrix{Float64}: Tabla de coefficientes a la que queremos añadir los coeficientes\ncoeffs_info::CoefficientsInfo: Estructura de información de los nuevos coeficientes.\ncoeffs_vector::Vector{Matrix{Float64}}): Vector de los coeficientes que se quieren añadir.\n\nArgumentos de salida:\n\nnew_coeffs_info_vec::Vector{CoefficientsInfo}: Nuevo vector de información del fichero de coeficientes.\ntable::Matrix{Float64}: Nueva tabla de coeficientes\n\n@precondition: Los coeficientes de la tabla existentes deberan estar ordenados segun sus IDs en orden ascendente. \n\n\n\n\n\n","category":"method"},{"location":"api.html#LittleEphemeris.create_coeffs_file","page":"API","title":"LittleEphemeris.create_coeffs_file","text":"createcoeffsfile\n\nGenera dos ficheros, un fichero CSV con los coeficientes y uno JSON con los datos de coefficients\n\nArgumentos de entrada\n\ncoeffs_info_file_path::String: Ruta del fichero de información que se quiere crear.\ncoeffs_file_path::String: Ruta del fichero de coeficientes que se quiere crear.\nbody_vec::Union{Vector{Int} Vector{String}}: Vector de IDs o de nombres de los cuerpos de los que se quieren obtener los\n\ncoeficientes.\n\ntime_interval_vec::Vector{Tuple{Float64, Float64}}: Vector de intervalos de tiempo.\nheader_file_path::String: Ruta del fichero de información existente.\ntime_file_path::String: Ruta del fichero de intervalos de tiempo.\n\n@precondition: La longitud del vector de cuerpos debe ser igual a la longitud del vector de intervalos de tiempos.\n\n@precondition: El fichero de información (header) debe ser un fichero JSON cun un formato especifico.\n\n@precondition: El fichero de intervalos de tiempo debe ser un fichero csv de una única columna.\n\n\n\n\n\n","category":"function"},{"location":"api.html#LittleEphemeris.eval_coeffs_file-Tuple{String, String, Union{Int64, String}, Vector{Float64}}","page":"API","title":"LittleEphemeris.eval_coeffs_file","text":"evalcoeffsfile\n\nEvalua los coeficientes que se encuentran en un fichero especificado en los intervalos de tiempo especificados.\n\nArgumentos de entrada\n\ncoeffs_info_file_path::String: Ruta del fichero de información.\ncoeffs_file_path::String: Fichero de coeficientes.\nbody::Union{Int, String}: Cuerpo del que se quieren evaluar los cooeficientes.\ntime_vector::Vector{Float64}: Vector de instantes en los que se quiere evaluar los coeficientes.\n\nArgumentos de salida\n\nx::Vector{Float64}: Vector de coordenas en el eje x.\ny::Vector{Float64}: Vector de coordenas en el eje y.\nz::Vector{Float64}: Vector de coordenas en el eje z.\nvx::Vector{Float64}: Vector de velocidad en el eje x.\nvy::Vector{Float64}: Vector de velocidad en el eje y.\nvz::Vector{Float64}: Vector de velocidad en el eje z.\n\n@precondition: el fichero de información debe ser un fichero JSON y tiene que estar en un formato específico.\n\n\n\n\n\n","category":"method"},{"location":"api.html#LittleEphemeris.generate_coeffs","page":"API","title":"LittleEphemeris.generate_coeffs","text":"generate_coeffs\n\nGenera los coeficientes de Chebysev entre dos fechas dadas para un cuerpo especificado.\n\nArgumentos de Entrada:\n\ninitial_date::Float64: fecha inicial, perteneciente al primer intervalo (en formato ET).\nfinal_date::Float64: fecha final, perteneciente al último intervalo (en formato ET).\ncoeffs_info::Tuple{Int, Int, Int}: Una tupla con la ID del cuerpo del que queremos obtener las efemerides, número de\n\ncoeficientes que queremos en nuestros polinomios y número de polynomios que queremos por intervalo.\n\ntime_file_path::String: Ruta del fichero de fechas.\n\nArgumentos de salida:\n\ntime_vec::Vector{Float64}: Vector de fechas (en formato ET).\nx::Matrix{Float64}: Matriz de polinomios interpoladores de las coordenadas del eje x. Cada fila es un polinomio, hay tantas\n\ncolumnas como coeficientes.\n\ny::Matrix{Float64}: Matriz de polinomios interpoladores de las coordenadas del eje y. Cada fila es un polinomio, hay tantas\n\ncolumnas como coeficientes.\n\nz::Matrix{Float64}: Matriz de polinomios interpoladores de las coordenadas del eje z. Cada fila es un polinomio, hay tantas\n\ncolumnas como coeficientes.\n\nvx::Matrix{Float64}: Matriz de polinomios interpoladores de la velocidad en el eje x. Cada fila es un polinomio, hay tantas\n\ncolumnas como coeficientes.\n\nvy::Matrix{Float64}: Matriz de polinomios interpoladores de la velocidad en el eje x. Cada fila es un polinomio, hay tantas\n\ncolumnas como coeficientes.\n\nvz::Matrix{Float64}: Matriz de polinomios interpoladores de la velocidad en el eje x. Cada fila es un polinomio, hay tantas\n\ncolumnas como coeficientes.\n\n@precondition: initialdate < finaldate\n\n@precondition: El fichero de intervalos de tiempo debe ser un fichero csv de una única columna.\n\n\n\n\n\n","category":"function"},{"location":"api.html#LittleEphemeris.generate_files","page":"API","title":"LittleEphemeris.generate_files","text":"generate_files\n\nGenera los ficheros necesarios para el uso del software\n\nArgumentos de entrada\n\npath::String: Ruta en la que se quieren guardar los ficheros\n\n\n\n\n\n","category":"function"},{"location":"api.html#LittleEphemeris.generate_subfile-Tuple{String, String, Union{Vector{Int64}, Vector{String}}, Vector{Tuple{Float64, Float64}}, String, String}","page":"API","title":"LittleEphemeris.generate_subfile","text":"generate_subfile\n\nPartiendo de un fichero genera otro con los cuerpos indicados en los intervalos de tiempo indicados.\n\nArgumentos de entrada\n\ninfo_subfile_path::String: Ruta del nuevo fichero de información.\nsubfile_path::String: Ruta del nuevo fichero de coeficientes.\nbody_vec::Union{Vector{Int}, Vector{String}}: Vector de IDs de los cuerpos o de los nombres de los cuerpo.\ntime_interval_vec::Vector{Tuple{Float64, Float64}}: Vector de intervalos de tiempo.\ninfo_main_file_path::String: Ruta del fichero de información original.\nmain_file_path::String: Ruta del fichero de coeficientes original.\n\n\n\n\n\n","category":"method"},{"location":"index.html#LittleEphemeris.jl","page":"Home","title":"LittleEphemeris.jl","text":"","category":"section"}]
}