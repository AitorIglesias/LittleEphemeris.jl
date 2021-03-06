module LittleEphemeris

using JSON
using CSV
using DataFrames
using SPICE
using FFTW

include("generate_files.jl")
include("generate_coefficients.jl")
include("manage_coefficients.jl")
include("BodyCoeffs.jl")

end