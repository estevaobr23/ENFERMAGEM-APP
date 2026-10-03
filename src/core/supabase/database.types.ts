export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          position: number
          product_id: string
          short_title: string
          slug: string
          status: string
          title: string
          tone: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          position?: number
          product_id: string
          short_title: string
          slug: string
          status?: string
          title: string
          tone?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          position?: number
          product_id?: string
          short_title?: string
          slug?: string
          status?: string
          title?: string
          tone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      entitlements: {
        Row: {
          buyer_email: string
          created_at: string
          granted_at: string
          id: string
          plan_id: string
          product_id: string
          purchase_id: string | null
          revoke_reason: string | null
          revoked_at: string | null
          source: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          buyer_email: string
          created_at?: string
          granted_at?: string
          id?: string
          plan_id: string
          product_id: string
          purchase_id?: string | null
          revoke_reason?: string | null
          revoked_at?: string | null
          source: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          buyer_email?: string
          created_at?: string
          granted_at?: string
          id?: string
          plan_id?: string
          product_id?: string
          purchase_id?: string | null
          revoke_reason?: string | null
          revoked_at?: string | null
          source?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "entitlements_product_id_plan_id_fkey"
            columns: ["product_id", "plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["product_id", "id"]
          },
          {
            foreignKeyName: "entitlements_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: true
            referencedRelation: "purchases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entitlements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          topic_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          topic_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          topic_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      offers: {
        Row: {
          created_at: string
          currency: string
          external_offer_id: string
          id: string
          is_active: boolean
          name: string | null
          plan_id: string
          price_cents: number | null
          product_id: string
          provider: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string
          external_offer_id: string
          id?: string
          is_active?: boolean
          name?: string | null
          plan_id: string
          price_cents?: number | null
          product_id: string
          provider: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string
          external_offer_id?: string
          id?: string
          is_active?: boolean
          name?: string | null
          plan_id?: string
          price_cents?: number | null
          product_id?: string
          provider?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "offers_product_id_plan_id_fkey"
            columns: ["product_id", "plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["product_id", "id"]
          },
        ]
      }
      plans: {
        Row: {
          created_at: string
          features: string[]
          id: string
          key: string
          limits: NonNullable<Json>
          name: string
          product_id: string
          rank: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          features?: string[]
          id?: string
          key: string
          limits?: NonNullable<Json>
          name: string
          product_id: string
          rank?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          features?: string[]
          id?: string
          key?: string
          limits?: NonNullable<Json>
          name?: string
          product_id?: string
          rank?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "plans_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          key: string
          name: string
          reserved_slugs: string[]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          key: string
          name: string
          reserved_slugs?: string[]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          key?: string
          name?: string
          reserved_slugs?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      purchases: {
        Row: {
          amount_cents: number | null
          buyer_email: string
          created_at: string
          currency: string
          external_purchase_id: string
          id: string
          offer_id: string
          provider: string
          status: string
          status_changed_at: string
          updated_at: string
        }
        Insert: {
          amount_cents?: number | null
          buyer_email: string
          created_at?: string
          currency?: string
          external_purchase_id: string
          id?: string
          offer_id: string
          provider: string
          status: string
          status_changed_at?: string
          updated_at?: string
        }
        Update: {
          amount_cents?: number | null
          buyer_email?: string
          created_at?: string
          currency?: string
          external_purchase_id?: string
          id?: string
          offer_id?: string
          provider?: string
          status?: string
          status_changed_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchases_offer_id_fkey"
            columns: ["offer_id"]
            isOneToOne: false
            referencedRelation: "offers"
            referencedColumns: ["id"]
          },
        ]
      }
      question_attempts: {
        Row: {
          answered_at: string
          context: string
          id: string
          is_correct: boolean
          question_id: string
          selected_option_id: string
          topic_id: string
          user_id: string
        }
        Insert: {
          answered_at?: string
          context?: string
          id?: string
          is_correct: boolean
          question_id: string
          selected_option_id: string
          topic_id: string
          user_id: string
        }
        Update: {
          answered_at?: string
          context?: string
          id?: string
          is_correct?: boolean
          question_id?: string
          selected_option_id?: string
          topic_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "question_attempts_question_id_selected_option_id_fkey"
            columns: ["question_id", "selected_option_id"]
            isOneToOne: false
            referencedRelation: "question_options"
            referencedColumns: ["question_id", "id"]
          },
          {
            foreignKeyName: "question_attempts_topic_id_question_id_fkey"
            columns: ["topic_id", "question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["topic_id", "id"]
          },
          {
            foreignKeyName: "question_attempts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      question_options: {
        Row: {
          id: string
          is_correct: boolean
          label: string
          question_id: string
          text: string
        }
        Insert: {
          id?: string
          is_correct?: boolean
          label: string
          question_id: string
          text: string
        }
        Update: {
          id?: string
          is_correct?: boolean
          label?: string
          question_id?: string
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "question_options_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          created_at: string
          difficulty: string | null
          explanation: string
          id: string
          key: string
          last_reviewed_at: string | null
          position: number
          section_key: string | null
          source_id: string
          status: string
          stem: string
          topic_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          difficulty?: string | null
          explanation: string
          id?: string
          key: string
          last_reviewed_at?: string | null
          position?: number
          section_key?: string | null
          source_id: string
          status?: string
          stem: string
          topic_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          difficulty?: string | null
          explanation?: string
          id?: string
          key?: string
          last_reviewed_at?: string | null
          position?: number
          section_key?: string | null
          source_id?: string
          status?: string
          stem?: string
          topic_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "questions_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "questions_topic_id_source_id_fkey"
            columns: ["topic_id", "source_id"]
            isOneToOne: false
            referencedRelation: "topic_sources"
            referencedColumns: ["topic_id", "id"]
          },
        ]
      }
      review_queue: {
        Row: {
          created_at: string
          id: string
          question_id: string
          reason: string
          resolved_at: string | null
          status: string
          topic_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          question_id: string
          reason?: string
          resolved_at?: string | null
          status?: string
          topic_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          question_id?: string
          reason?: string
          resolved_at?: string | null
          status?: string
          topic_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "review_queue_topic_id_question_id_fkey"
            columns: ["topic_id", "question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["topic_id", "id"]
          },
          {
            foreignKeyName: "review_queue_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_sections: {
        Row: {
          created_at: string
          section_key: string
          topic_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          section_key: string
          topic_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          section_key?: string
          topic_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_sections_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_sections_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      topic_sources: {
        Row: {
          created_at: string
          id: string
          locator: string | null
          position: number
          source_accessed_at: string
          source_organization: string
          source_title: string
          source_url: string
          topic_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          locator?: string | null
          position?: number
          source_accessed_at: string
          source_organization: string
          source_title: string
          source_url: string
          topic_id: string
        }
        Update: {
          created_at?: string
          id?: string
          locator?: string | null
          position?: number
          source_accessed_at?: string
          source_organization?: string
          source_title?: string
          source_url?: string
          topic_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_sources_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      topics: {
        Row: {
          category_id: string
          created_at: string
          description: string
          id: string
          key_points: string[]
          last_reviewed_at: string | null
          outline: string[]
          position: number
          reading_minutes: number | null
          review_notes: string | null
          search_text: string
          sections: NonNullable<Json>
          slug: string
          status: string
          summary: string
          title: string
          updated_at: string
        }
        Insert: {
          category_id: string
          created_at?: string
          description: string
          id?: string
          key_points?: string[]
          last_reviewed_at?: string | null
          outline?: string[]
          position?: number
          reading_minutes?: number | null
          review_notes?: string | null
          search_text?: string
          sections?: NonNullable<Json>
          slug: string
          status?: string
          summary: string
          title: string
          updated_at?: string
        }
        Update: {
          category_id?: string
          created_at?: string
          description?: string
          id?: string
          key_points?: string[]
          last_reviewed_at?: string | null
          outline?: string[]
          position?: number
          reading_minutes?: number | null
          review_notes?: string | null
          search_text?: string
          sections?: NonNullable<Json>
          slug?: string
          status?: string
          summary?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "topics_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_topic_progress: {
        Row: {
          first_reviewed_at: string
          last_answered_at: string | null
          last_reviewed_at: string | null
          questions_answered: number
          questions_correct: number
          quiz_best_correct: number | null
          quiz_completed_at: string | null
          quiz_count: number
          quiz_last_correct: number | null
          quiz_last_total: number | null
          review_count: number
          topic_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          first_reviewed_at?: string
          last_answered_at?: string | null
          last_reviewed_at?: string | null
          questions_answered?: number
          questions_correct?: number
          quiz_best_correct?: number | null
          quiz_completed_at?: string | null
          quiz_count?: number
          quiz_last_correct?: number | null
          quiz_last_total?: number | null
          review_count?: number
          topic_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          first_reviewed_at?: string
          last_answered_at?: string | null
          last_reviewed_at?: string | null
          questions_answered?: number
          questions_correct?: number
          quiz_best_correct?: number | null
          quiz_completed_at?: string | null
          quiz_count?: number
          quiz_last_correct?: number | null
          quiz_last_total?: number | null
          review_count?: number
          topic_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_topic_progress_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_topic_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      visual_maps: {
        Row: {
          created_at: string
          id: string
          last_reviewed_at: string | null
          spec: NonNullable<Json>
          status: string
          title: string
          topic_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_reviewed_at?: string | null
          spec: NonNullable<Json>
          status?: string
          title: string
          topic_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          last_reviewed_at?: string | null
          spec?: NonNullable<Json>
          status?: string
          title?: string
          topic_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "visual_maps_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: true
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      webhook_events: {
        Row: {
          attempts: number
          dedupe_key: string
          event_type: string | null
          id: string
          last_error: string | null
          payload: NonNullable<Json>
          processed_at: string | null
          provider: string
          purchase_id: string | null
          received_at: string
          status: string
        }
        Insert: {
          attempts?: number
          dedupe_key: string
          event_type?: string | null
          id?: string
          last_error?: string | null
          payload: NonNullable<Json>
          processed_at?: string | null
          provider: string
          purchase_id?: string | null
          received_at?: string
          status?: string
        }
        Update: {
          attempts?: number
          dedupe_key?: string
          event_type?: string | null
          id?: string
          last_error?: string | null
          payload?: NonNullable<Json>
          processed_at?: string | null
          provider?: string
          purchase_id?: string | null
          received_at?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "webhook_events_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: false
            referencedRelation: "purchases"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      answer_question: {
        Args: { p_context?: string; p_option_id: string; p_question_id: string }
        Returns: Json
      }
      apply_purchase_event: {
        Args: {
          p_amount_cents?: number
          p_buyer_email: string
          p_currency?: string
          p_external_offer_id: string
          p_external_purchase_id: string
          p_occurred_at?: string
          p_provider: string
          p_status: string
        }
        Returns: Json
      }
      claim_my_entitlements: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      finish_topic_quiz: { Args: { p_topic_id: string }; Returns: Json }
      mark_topic_reviewed: { Args: { p_topic_id: string }; Returns: Json }
      my_answered_feedback: {
        Args: { p_question_ids: string[] }
        Returns: {
          correct_option_id: string
          explanation: string
          question_id: string
        }[]
      }
      search_topics: {
        Args: { p_query: string }
        Returns: {
          category_id: string
          description: string
          id: string
          slug: string
          title: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
