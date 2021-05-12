import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Show } from './show';

@Injectable({
  providedIn: 'root',
})
export class SupbaseService {
  supabase = createClient(
    'https://sauogpphyxkjtluuyors.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDQ5NzU1MCwiZXhwIjoxOTM2MDczNTUwfQ.6izEp8hXvXWu1pZK0FOWn0e2Z6aqvwx1_TFasPW3MNY'
  );

  constructor() {}

  async getShows() {
    return await this.supabase
      .from('shows')
      .select('*')
      .order('datetime', { ascending: true });
  }
}
