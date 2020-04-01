package Project;

import java.util.ArrayList;
import java.util.Collections;

public class QuickSort{
    public void sort( ArrayList<HighScore> list, int low, int high){
        if( low < high){
            int part = this.partition(list, low, high);

            this.sort(list, low, part-1); 
            this.sort(list, part+1, high); 
        }
    }

    public int partition( ArrayList<HighScore> list, int low, int high){
        int pivot = list.get(high).getScore();  
        int i = low-1;
        for (int j = low; j<high; j++) 
        { 
            if (list.get(j).getScore() > pivot) 
            {  

                i++;
                Collections.swap(list, i, j);
            } 
        } 

        Collections.swap(list, i+1, high);
        return i+1; 
    }
}