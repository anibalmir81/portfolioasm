package com.porfolio.asm.Interface;

import com.porfolio.asm.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    // Traer una lista de persona
    public List<Persona> getPersona();
    
    // Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    // Eliminar un objeto pero lo buscamos por ID
    public void deletePersona(int id);
    
    // Buscar una persona por ID
    public Persona findPersona(int id);
}
